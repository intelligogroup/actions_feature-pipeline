import { SimpleGit } from "simple-git/promise";
import contextUtil from "./context-util";

const { sourceBranch } = contextUtil;

export default async (branchName: string, git: SimpleGit) => {
    try {
        await git.checkout(branchName);
        await git.merge(['-Xignore-all-space', sourceBranch]);
        await git.commit(`✈ Automatically merging ${sourceBranch} into ${branchName} ✈`);
        await git.push();
    } catch (error) {
        console.log(`💥Failed to merge ${sourceBranch} into ${branchName}💥`);
    }
}