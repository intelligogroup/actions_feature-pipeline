
import { context } from '@actions/github';

let repo: string, owner: string, ref: string, sha: string;

if (process.env.IS_DEVELOPMENT_LOCAL_MODE) {
    repo = process.env.REPO;
    owner = process.env.GITHUB_OWNER;
    ref = process.env.GIT_REF;
    sha = process.env.GIT_SHA;
} else {
    ({ repo: { repo, owner }, ref, sha } = context);
}

const sourceBranchName = ref.split('/')[2];

if (!sourceBranchName || ['master', 'stage'].includes(sourceBranchName)) {
    throw new Error('This actions must be triggered from a branch other than stage and master');
}


export default {
    sourceBranch: sourceBranchName,
    repo,
    sha,
    owner,
    ref
};