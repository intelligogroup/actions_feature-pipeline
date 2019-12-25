import octokit from "./octokit"
import { owner, repo, sourceBranch } from "./util"

export default async () => {
    const { data: [{ number }] } = await octokit.pulls.list({
        owner,
        repo,
        head: `${owner}:${sourceBranch}`
    });

    return number;
}