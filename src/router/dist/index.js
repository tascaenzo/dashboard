"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var Home_vue_1 = require("../views/Home.vue");
var Default_vue_1 = require("../views/layouts/Default.vue");
var Dashboard_vue_1 = require("../views/layouts/Dashboard.vue");
vue_1["default"].use(vue_router_1["default"]);
var routes = [
    {
        path: '/',
        name: 'Home',
        component: Home_vue_1["default"],
        meta: { layout: Dashboard_vue_1["default"] }
    },
    {
        path: '/about',
        name: 'About',
        component: function () { return Promise.resolve().then(function () { return require('../views/About.vue'); }); },
        meta: { layout: Dashboard_vue_1["default"] }
    },
    {
        path: '/login',
        name: 'Login',
        component: function () { return Promise.resolve().then(function () { return require('../views/Login.vue'); }); },
        meta: { layout: Default_vue_1["default"] }
    }
];
var router = new vue_router_1["default"]({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
});
exports["default"] = router;
