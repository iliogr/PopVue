import Vtooltip from './Vtooltip.vue';

module.exports = {
    install: function (Vue, options) {
        Vue.component('v-tooltip', Vtooltip);
    }
};
