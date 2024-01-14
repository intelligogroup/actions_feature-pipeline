import octokit from "./octokit"
import contextUtil from "./context-util"

const { owner, repo, sourceBranch } = contextUtil;

export default async () => {
    console.log(`Comparing ${sourceBranch} to master`);
    const { data: { files } } = await octokit.repos.compareCommits({
        owner,
        repo,
        base: 'master',
        head: sourceBranch
    });

    return files;
}