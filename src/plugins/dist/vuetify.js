"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var vuetify_1 = require("vuetify");
vue_1["default"].use(vuetify_1["default"]);
exports["default"] = new vuetify_1["default"]({
    theme: {
        themes: {
            light: {
                primary: '#1976D2',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107'
            }
        }
    }
});
