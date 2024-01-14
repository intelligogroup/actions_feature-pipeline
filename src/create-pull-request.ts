import octokit from './octokit';

import contextUtil from './context-util';

const { owner, repo, sourceBranch } = contextUtil;

export default async (base: 'master' | 'stage') => {

    try {

        const { data: { number } } = await octokit.pulls.create({
            owner,
            repo,
            title: `💾Pulling ${sourceBranch} into ${base}💾`,
            body: ':clap: *An automated PR*',
            head: sourceBranch,
            base
        });

        return number;

    } catch (error) {
        const errors = error?.errors ?? error?.response.data.errors;
        const alreadyExistError = errors.some(({ message }) => message?.includes('already exist'));

        if (!alreadyExistError) {
            throw error;
        }

        console.log('Pull request already exist');
    }
}