import { GitVersion } from './git-version';
export declare const MinimumGitVersion: GitVersion;
export interface IGitCommandManager {
    branchDelete(remote: boolean, branch: string): Promise<void>;
    branchExists(remote: boolean, pattern: string): Promise<boolean>;
    branchList(remote: boolean): Promise<string[]>;
    checkout(ref: string, startPoint: string): Promise<void>;
    checkoutDetach(): Promise<void>;
    config(configKey: string, configValue: string): Promise<void>;
    configExists(configKey: string): Promise<boolean>;
    fetch(fetchDepth: number, refSpec: string[]): Promise<void>;
    getWorkingDirectory(): string;
    init(): Promise<void>;
    isDetached(): Promise<boolean>;
    lfsFetch(ref: string): Promise<void>;
    lfsInstall(): Promise<void>;
    log1(): Promise<void>;
    remoteAdd(remoteName: string, remoteUrl: string): Promise<void>;
    tagExists(pattern: string): Promise<boolean>;
    tryClean(): Promise<boolean>;
    tryConfigUnset(configKey: string): Promise<boolean>;
    tryDisableAutomaticGarbageCollection(): Promise<boolean>;
    tryGetFetchUrl(): Promise<string>;
    tryReset(): Promise<boolean>;
}
export declare function CreateCommandManager(workingDirectory: string, lfs: boolean): Promise<IGitCommandManager>;
