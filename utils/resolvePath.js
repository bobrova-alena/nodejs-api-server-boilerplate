/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveRelativeAppRoot = relativePath => path.resolve(appDirectory, relativePath);

module.exports.resolveRelativeAppRoot = resolveRelativeAppRoot;
