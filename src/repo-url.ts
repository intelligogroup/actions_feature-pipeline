import contextUtil from "./context-util";
import authToken from "./auth-token";

const { owner, repo } = contextUtil;

export default `https://${process.env.GITHUB_ACTOR}:${authToken}@github.com/${encodeURIComponent(
    owner
)}/${encodeURIComponent(
    repo
)}.git`;