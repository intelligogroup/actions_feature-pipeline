import path from 'path';
const workingDir = process.cwd();
process.env.REPO = path.basename(workingDir);

import './index';