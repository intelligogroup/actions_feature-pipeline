
import simpleGit, { SimpleGit } from 'simple-git/promise';
import { sourceBranch } from './util';
import repoUrl from './repo-url';
import { promises } from 'fs';

export default async () => {

    const git = simpleGit();

    const content = await promises.readdir(process.cwd());

    await git.init();

    await git.addConfig('user.name', process.env.INPUT_USERNAME);
    
    await git.addConfig('user.email', process.env.INPUT_EMAIL_ADDRESS);

    await git.remote(['add', 'origin', repoUrl]);

    await git.fetch('origin', 'master');

    await rebaseOn(git, 'stage');

    await rebaseOn(git, sourceBranch);

    await git.checkout(sourceBranch);

}

async function rebaseOn(git: SimpleGit, branch: string) {

    try {

        await git.fetch('origin', branch);

        await git.checkout(branch);

        await git.rebase(['origin/master']);

        await git.commit(`test-commit: ${Date.now()}`);

        await git.push();

    } catch (error) {

        console.log(`REBASE MASTER ON ${branch} failed. aborting`);

        try { await git.rebase(['--abort']); } catch (e) { console.log('rebase --abort returned an error'); }
    }

}