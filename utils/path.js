// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolveRelativeAppRoot } = require('./resolvePath');

module.exports = {
  root: resolveRelativeAppRoot('.'),
  dist: resolveRelativeAppRoot('dist'),
  src: resolveRelativeAppRoot('src'),
  serverAppTs: resolveRelativeAppRoot('./src/server.ts'),
};
