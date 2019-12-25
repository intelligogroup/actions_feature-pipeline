import { GitHub } from '@actions/github';
import authToken from './auth-token';

export default new GitHub(authToken);