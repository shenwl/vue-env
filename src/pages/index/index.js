import 'css/common.css';

import Vue from 'vue';
import {Button} from 'vant';

Vue.use(Button)

var app = new Vue({
  el: "#app",
  data: {
    msg: 'hello'
  }
})
