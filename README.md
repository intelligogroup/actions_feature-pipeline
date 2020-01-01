# actions_feature-pipeline

### IMPORTANT!
**Before push, make sure to execute `npm run build` and commit the changes**

## How to use:
- Use this action in your workflow file. inputs required: github_token, username and email_address.
- To trigger the automation include the string feature/ in the commit message on a feature branch
- This will trigger a github action that creates (if not already exist) pull requests to branches `master` and `stage`
- The action will also try to merge the pull request to branch `stage`. if failed, the action will fail.
