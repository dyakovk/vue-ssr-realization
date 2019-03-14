const fs = require('fs');
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./src/index.html', 'utf-8'),
});
const createApp = require('./src/app');

module.exports = async (ctx, next) => {
  try {
    const appContext = {
      url: ctx.request.url,
    };

    const app = createApp(appContext);

    const htmlContext = {
      title: 'Vue SSR 3',
      meta: `
        <meta charset="utf-8">
      `,
    };

    const html = await renderer.renderToString(app, htmlContext);
    ctx.body = html;
  } catch (err) {
    ctx.status = 500;
    ctx.body = 'Internal error';
  }
};
