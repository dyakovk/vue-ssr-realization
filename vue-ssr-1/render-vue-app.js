const Vue = require('vue');
const renderer = require('vue-server-renderer').createRenderer();

module.exports = async (ctx, next) => {
  try {
    const app = new Vue({
      data: {
        url: ctx.request.url,
      },
      template: '<div>Visited URL is: {{ url }}</div>',
    });

    const html = await renderer.renderToString(app);

    ctx.body = `
      <!DOCTYPE html>
      <html>
        <head><title>Vue SSR 1</title></head>
        <body>${html}</body>
      </html>
    `;
  } catch (err) {
    ctx.status = 500;
    ctx.body = 'Internal error';
  }
};
