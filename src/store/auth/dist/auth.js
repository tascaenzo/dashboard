"use strict";
var _a;
exports.__esModule = true;
var actions_type_1 = require("./actions.type");
var state = function () { return ({
    isAuth: false,
    remember: false,
    token: '',
    refreshToken: '',
    user: null
}); };
var getters = {};
var mutations = {};
var actions = (_a = {},
    _a[actions_type_1.LOGIN] = function (context, pyload) {
        console.log(pyload);
    },
    _a[actions_type_1.LOGOUT] = function (context, pyload) {
        console.log(pyload);
    },
    _a);
exports["default"] = {
    namespaced: true,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
};
