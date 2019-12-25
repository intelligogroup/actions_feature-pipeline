import octokit from "./octokit"
import { owner, repo, sourceBranch } from "./util"

export default async () => {
    const { data: { files } } = await octokit.repos.compareCommits({
        owner,
        repo,
        base: 'master',
        head: sourceBranch
    });

    return files;
}