import octokit from "./octokit"
import contextUtil from "./context-util"

const { owner, repo, sourceBranch, sourceBranchNameOld } = contextUtil;

export default async () => {
    console.log(`Comparing ${sourceBranch} to master`, `old logic: ${sourceBranchNameOld}`);
    const { data: { files } } = await octokit.repos.compareCommits({
        owner,
        repo,
        base: 'master',
        head: sourceBranch
    });

    return files;
}