import contextUtil from './context-util';
import createPullRequest from './create-pull-request';
// import mergePullRequest from './merge-pull-request';
import getLastCommit from './get-last-commit';
import compareToMaster from './compare-to-master';
// import getLastPullRequestToStage from './get-last-pull-request-to-stage';
import rebaseMaster from './rebase-master';
import setupRepoFiles from './setup-repo-files';
import mergeTo from './merge-to';


(async () => {
    const { sha, message } = await getLastCommit(contextUtil.ref);
    console.log(`latest commit message: ${message}`);

    if (!message.includes('feature/')) {
        console.log('latest commit is not a ready feature. To trigger this action use the string "feature/" in the commit message');
        return;
    }

    const { sha: masterLastCommitSha } = await getLastCommit('refs/heads/master');

    if (sha === masterLastCommitSha) {
        console.log('Source and master branches are the same, no point in pull request!!');
        return;
    }
    console.log('before compareToMaster')
    const files = await compareToMaster();

    if (!files.length) {
        console.log('No file changes detected between source and master branches');
        return;
    }
    console.log('before setupRepoFiles')
    const git = await setupRepoFiles();
    // await rebaseMaster(git);

    console.log('before createPullRequest master')
    await createPullRequest('master');

    console.log('before createPullRequest stage')
    await createPullRequest('stage');

    console.log('before mergeTo')
    await mergeTo('stage', git);
    console.log('done')
    // if (!pull_number) {
    //     pull_number = await getLastPullRequestToStage();
    // }

    // await mergePullRequest(pull_number);

})()

    .catch(error => {
        console.log('!!!!!')
        console.error(error);
        process.exit(1);
    });
