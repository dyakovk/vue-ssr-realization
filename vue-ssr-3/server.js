const Koa = require('koa');
const KoaRouter = require('koa-router');
const renderVueApp = require('./render-vue-app');

const app = new Koa();
const router = new KoaRouter();

router.get('*', renderVueApp);

app.use(router.routes());
app.listen(8080);
