import octokit from "./octokit"
import { owner, repo, sourceBranch } from "./util"

export default async (pull_number: number) => {
    await octokit.pulls.merge({
        owner,
        repo,
        pull_number,
        commit_title: `Merging ${sourceBranch} into stage`,
        merge_method: 'squash'
    });
}