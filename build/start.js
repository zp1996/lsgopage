/**
 * 生成相应的开发环境,mobile or pc
 */
const { exec } = require('child_process');
const { client = 'pc' } = process.env;
const root = require('path').join(__dirname, '..');

exec(`cp ${root}/templates/${client}.html ${root}/index.html`, (err) => {
  if (err) {
    console.error(err);
  }

  require('./dev-server');
});
