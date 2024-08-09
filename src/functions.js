"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinArrays = exports.fetchData = exports.format = void 0;
exports.getName = getName;
function addNumbers(a, b) {
    return a + b;
}
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
var fetchData = function (url) {
    return Promise.resolve("Data from ".concat(url));
};
exports.fetchData = fetchData;
var joinArrays = function (salutation) {
    var arr1 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arr1[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(arr1.join(""));
};
exports.joinArrays = joinArrays;
function getName(user) {
    var _a, _b;
    return "".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : 'first', " ").concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : 'last');
}
exports.default = addNumbers;
