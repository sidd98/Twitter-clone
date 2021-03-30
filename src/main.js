import Vue from 'vue';
import VueMq from 'vue-mq'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFontAwesome, faTwitter, } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue';

library.add(fas, faFontAwesome, faTwitter);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    small: 500,
    medium: 1000,
    large: Infinity,
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
