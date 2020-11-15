"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var router_1 = require("./router");
var store_1 = require("./store");
var vuetify_1 = require("./plugins/vuetify");
var i18n_1 = require("./plugins/i18n");
vue_1["default"].config.productionTip = false;
new vue_1["default"]({
    router: router_1["default"],
    store: store_1["default"],
    vuetify: vuetify_1["default"],
    i18n: i18n_1["default"],
    render: function (h) { return h(App_vue_1["default"]); }
}).$mount('#app');
