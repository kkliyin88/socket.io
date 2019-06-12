import Vue from 'vue'
import App from './App.vue';
import router from './router';
import Axios from 'axios';
import moment from 'moment';
import iView from 'iview';
//import 'iview/dist/styles/iview.css';

Vue.use(iView);
Vue.use(moment);

new Vue({
  el: '#app',
  router,
//render: h => h(App),
  components: { App },
  template: '<App/>'
})

