"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.camelCaseToDash = exports["default"] = void 0;
var _default = {};
exports["default"] = _default;

var camelCaseToDash = function camelCaseToDash(str) {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
};

exports.camelCaseToDash = camelCaseToDash;