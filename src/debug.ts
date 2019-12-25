import simpleGit from 'simple-git/promise';


const clone = async () => {

    const git = simpleGit();

    const repositoryUrl = `https://github.com/${encodeURIComponent(
        'intelligogroup'
    )}/${encodeURIComponent(
        'test-repo'
    )}`;

    await git.clone(repositoryUrl);

}

clone()