const fs = require('fs');
const Vue = require('vue');
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./index.html', 'utf-8'),
});

module.exports = async (ctx, next) => {
  try {
    const app = new Vue({
      data: {
        url: ctx.request.url,
      },
      template: '<div>Visited URL is: {{ url }}</div>',
    });

    const context = {
      title: 'Vue SSR 2',
      meta: `
        <meta charset="utf-8">
      `,
    };

    const html = await renderer.renderToString(app, context);
    ctx.body = html;
  } catch (err) {
    ctx.status = 500;
    ctx.body = 'Internal error';
  }
};
