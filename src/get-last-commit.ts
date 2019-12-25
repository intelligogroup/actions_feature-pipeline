import octokit from "./octokit"
import { owner, repo } from "./util"

export default async (ref: string) => {
    const { data: { sha, commit: { message } } } = await octokit.repos.getCommit({
        owner,
        repo,
        ref
    });

    return { sha, message };
}