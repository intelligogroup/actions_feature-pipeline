import { context } from '@actions/github';

export const { repo: { repo, owner }, ref, sha } = context;

const sourceBranchName = ref.split('/')[2];

if (!sourceBranchName || ['master', 'stage'].includes(sourceBranchName)) {
    throw new Error('This actions must be triggered from a branch other than stage and master');
}

export const sourceBranch = sourceBranchName;