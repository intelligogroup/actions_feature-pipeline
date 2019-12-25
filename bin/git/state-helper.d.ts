/**
 * Indicates whether the POST action is running
 */
export declare const IsPost: boolean;
/**
 * The repository path for the POST action. The value is empty during the MAIN action.
 */
export declare const RepositoryPath: string;
/**
 * Save the repository path so the POST action can retrieve the value.
 */
export declare function setRepositoryPath(repositoryPath: string): void;
