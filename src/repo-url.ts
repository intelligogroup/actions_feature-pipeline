import { owner, repo } from "./util";
import authToken from "./auth-token";

export default `https://${process.env.GITHUB_ACTOR}:${authToken}@github.com/${encodeURIComponent(
    owner
)}/${encodeURIComponent(
    repo
)}.git`;