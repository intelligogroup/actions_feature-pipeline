import simpleGit from 'simple-git/promise';
import repoUrl from './repo-url';
import fse from 'fs-extra';


export default async () => {
    const gitDir = process.env.LOCAL_DEVELOPMENT_GIT_DIRECTORY || process.cwd();

    const git = simpleGit(gitDir);

    await git.init();

    await git.addConfig('user.name', process.env.INPUT_USERNAME);
    
    await git.addConfig('user.email', process.env.INPUT_EMAIL_ADDRESS);

    await git.remote(['add', 'origin', repoUrl]);

    await git.fetch();

    await git.checkout('master');

    return git;

}