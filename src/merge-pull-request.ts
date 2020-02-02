import octokit from "./octokit"
import contextUtil from "./context-util"

const { owner, repo, sourceBranch } = contextUtil;

export default async (pull_number: number) => {
    await octokit.pulls.merge({
        owner,
        repo,
        pull_number,
        commit_title: `Merging ${sourceBranch} into stage`,
        merge_method: 'squash'
    });
}