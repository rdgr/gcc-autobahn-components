"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ty = _interopRequireDefault(require("../../framework/ty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    ba lh-solid flex items-center justify-center ph2 ph4-ns pv3 br2 fw7 f5 pointer\n    ", "\n    ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  transition: all .5s ease;\n  &:hover {\n    filter: brightness(110%);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styledComponents["default"].button(_templateObject(), (0, _ty["default"])(_templateObject2(), function (props) {
  return props.theme.button.base;
}, function (props) {
  return props.theme.button[props.color];
}));

var _default = StyledButton;
exports["default"] = _default;