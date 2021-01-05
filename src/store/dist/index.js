"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var vuex_1 = require("vuex");
var auth_1 = require("./auth/auth");
vue_1["default"].use(vuex_1["default"]);
var debug = process.env.NODE_ENV !== 'production';
exports["default"] = new vuex_1["default"].Store({
    modules: {
        auth: auth_1["default"]
    },
    strict: debug
});
