import octokit from "./octokit"
import contextUtil from "./context-util"

const { owner, repo } = contextUtil;

export default async (ref: string) => {
    const { data: { sha, commit: { message } } } = await octokit.repos.getCommit({
        owner,
        repo,
        ref
    });

    return { sha, message };
}