
import { SimpleGit } from 'simple-git/promise';
import contextUtil from './context-util';
import log from './log';

const { sourceBranch } = contextUtil;

export default async (git: SimpleGit) => {

    const { current } = await git.branch([]);

    try {

        await rebaseOn(git, 'stage');

        await rebaseOn(git, sourceBranch);

    } finally {

        await git.reset('hard');

        await git.checkout(current);
    }

}

async function rebaseOn(git: SimpleGit, branch: string) {

    log(`🐠 Try rebase master on ${branch}...`);

    try {

        await git.reset('hard');

        await git.checkout(branch);

        await git.rebase(['master']);

        await git.push('origin', 'master', { '--force': null });

        log(`✔ Successfully rebase master on ${branch}❕`);

    } catch (error) {

        console.log(`REBASE MASTER ON ${branch} failed. aborting`);

        try { await git.rebase(['--abort']); } catch (e) { }
    }

}