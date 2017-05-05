import Vue from 'vue';
import ElementUI from './element-ui';
import App from './App';

ElementUI(Vue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
