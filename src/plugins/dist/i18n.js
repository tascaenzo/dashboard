"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var vue_i18n_1 = require("vue-i18n");
vue_1["default"].use(vue_i18n_1["default"]);
function loadLocaleMessages() {
    var locales = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
    var messages = {};
    locales.keys().forEach(function (key) {
        var matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            var locale = matched[1];
            messages[locale] = locales(key);
        }
    });
    return messages;
}
exports["default"] = new vue_i18n_1["default"]({
    locale: process.env.VUE_APP_I18N_LOCALE || 'en',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    messages: loadLocaleMessages()
});
