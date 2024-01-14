
import { context } from '@actions/github';

let repo: string, owner: string, ref: string, sha: string;

if (process.env.IS_DEVELOPMENT_LOCAL_MODE) {
    repo = process.env.GIT_REPO;
    owner = process.env.GITHUB_OWNER;
    ref = process.env.GIT_REF;
    sha = process.env.GIT_SHA;
} else {
    ({ repo: { repo, owner }, ref, sha } = context);
}



const sourceBranchNameOld = ref.split('/')[2];

const splittedRefArray = ref.split('refs/heads/');
const sourceBranchName = splittedRefArray[splittedRefArray.length - 1];

if (!sourceBranchName || ['master', 'stage'].includes(sourceBranchName)) {
    throw new Error('This actions must be triggered from a branch other than stage and master');
}


export default {
    sourceBranch: sourceBranchName,
    sourceBranchNameOld,
    repo,
    sha,
    owner,
    ref
};