const authToken = process.env.INPUT_GITHUB_TOKEN;

if (!authToken) {
    throw new Error('You must set the github_token input when using the action');
}

export default authToken;