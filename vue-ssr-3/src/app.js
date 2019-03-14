const Vue = require('vue');

module.exports = context =>
  new Vue({
    template: `
      <div>
        <p>Visited URL is: {{ url }}</p>
        <button @click="sayHello">Hello</button>
      </div>
    `,
    data: {
      url: context.url,
    },
    methods: {
      sayHello() {
        window.alert('Hello!');
      },
    },
  });
