import octokit from "./octokit"
import contextUtil from "./context-util"

const { owner, repo, sourceBranch } = contextUtil;

export default async () => {
    const { data: [{ number }] } = await octokit.pulls.list({
        owner,
        repo,
        head: `${owner}:${sourceBranch}`
    });

    return number;
}