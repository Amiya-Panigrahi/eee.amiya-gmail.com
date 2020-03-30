import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Erc from './Erc.vue';

Vue.use(vueCustomElement);
Vue.customElement('my-element', Erc);