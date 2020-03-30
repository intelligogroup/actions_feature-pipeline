import { SimpleGit } from "simple-git/promise";
import contextUtil from "./context-util";
import log from "./log";

const { sourceBranch } = contextUtil;

export default async (branchName: string, git: SimpleGit) => {

    log(`🙈 Try merge ${sourceBranch} into ${branchName}...`);

    try {
        await git.checkout(sourceBranch);
        await git.checkout(branchName);
        await git.pull();
        await git.merge(['-Xignore-all-space', sourceBranch]);
        await git.push();

        log(`🐵 Sucssefully merged ${sourceBranch} into ${branchName}!`);

    } finally {

        git.reset('hard');

    }
}