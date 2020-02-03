import * as fse from 'fs-extra';

(async() => {
    const gitDirPath = process.env.LOCAL_DEVELOPMENT_GIT_DIRECTORY;
    await fse.remove(gitDirPath);
    await fse.ensureDir(gitDirPath);

    await import('./index');
})()
.catch(error => {
    debugger
})