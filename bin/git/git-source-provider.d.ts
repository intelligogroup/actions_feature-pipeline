export interface ISourceSettings {
    repositoryPath: string;
    repositoryOwner: string;
    repositoryName: string;
    ref: string;
    commit: string;
    clean: boolean;
    fetchDepth: number;
    lfs: boolean;
    authToken: string;
    persistCredentials: boolean;
}
export declare function getSource(settings: ISourceSettings): Promise<void>;
export declare function cleanup(repositoryPath: string): Promise<void>;
