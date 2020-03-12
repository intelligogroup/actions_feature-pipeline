
import { SimpleGit } from 'simple-git/promise';
import contextUtil from './context-util';

const { sourceBranch } = contextUtil;

export default async (git: SimpleGit) => {

    await rebaseOn(git, 'stage');

    await rebaseOn(git, sourceBranch);

    await git.checkout(sourceBranch);

}

async function rebaseOn(git: SimpleGit, branch: string) {

    try {
        await git.reset('hard');
        
        await git.checkout(branch);

        await git.rebase(['master']);
        
        await git.push();

    } catch (error) {

        console.log(`REBASE MASTER ON ${branch} failed. aborting`);

        try { await git.rebase(['--abort']); } catch (e) { console.log('rebase --abort returned an error'); }
    }

}