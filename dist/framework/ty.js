"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ty;

var _lodash = require("lodash");

var _uiHelpers = require("./ui-helpers");

var _tachyons = _interopRequireDefault(require("./tachyons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function lexer(stringWithSpace) {
  return (0, _lodash.compact)(stringWithSpace ? stringWithSpace.split(/\s/) : '');
}

function getTachyonsCSS(shorthand) {
  return _tachyons["default"][shorthand];
}

function mapTachyonsFragmentToCSSInJS(fragment) {
  return lexer(fragment).map(getTachyonsCSS);
}

function ty(tachyonsClassNameStrings) {
  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  // eslint-disable-next-line func-names
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var cssFromExpressions = [];
    keys.forEach(function (key) {
      var value = typeof key === 'function' ? key.bind()(args[args.length - 1]) : key;
      cssFromExpressions.push(mapTachyonsFragmentToCSSInJS(value));
    });
    cssFromExpressions = (0, _lodash.flattenDeep)(cssFromExpressions);

    if (typeof tachyonsClassNameStrings === 'function') {
      var ComponentClass = tachyonsClassNameStrings;

      var _ComponentClass = new ComponentClass(),
          componentSelector = _ComponentClass.name,
          componentStyles = _ComponentClass.styles;

      var tachyonsClassNameStringsParam = args[0];
      var inline = '';

      if (tachyonsClassNameStringsParam[0]) {
        var fragments = mapTachyonsFragmentToCSSInJS(tachyonsClassNameStringsParam[0]);
        fragments.map(function (item) {
          return (// eslint-disable-next-line implicit-arrow-linebreak
            Object.keys(item).forEach(function (key) {
              var isMediaQuery = key.charAt(0) === '@';

              if (isMediaQuery) {
                var mediaQueryProperty = item[key];
                inline += "".concat(key, " {");
                Object.keys(mediaQueryProperty).forEach(function (mediaQueryPropertyKey) {
                  var mediaQueryPropertyValue = mediaQueryProperty[mediaQueryPropertyKey];
                  return inline += "".concat(mediaQueryPropertyKey, ": ").concat(mediaQueryPropertyValue, ";");
                });
                return inline += "}";
              }

              return inline += "".concat(key, ": ").concat(item[key], ";");
            })
          );
        });
      }

      var regex = new RegExp("(.".concat((0, _uiHelpers.camelCaseToDash)(componentSelector), ")+([{.#~ ]{1})"), 'gm');
      return "".concat(componentStyles.replace(regex, '$2'), " { ").concat(inline, " }");
    }

    var mapPropsToCSSInJS = function mapPropsToCSSInJS(props) {
      return (// eslint-disable-next-line implicit-arrow-linebreak
        (0, _lodash.union)((0, _lodash.flattenDeep)(tachyonsClassNameStrings.map(function (fragment, index) {
          /** get tachyons css from template literal */
          var cssFromString = mapTachyonsFragmentToCSSInJS(fragment);
          /** get tachyons css string from what's inside ${xxx} */

          var cssFromVariableString;

          if (typeof args[index] === 'string') {
            cssFromVariableString = mapTachyonsFragmentToCSSInJS(args[index]);
          } else if (typeof args[index] === 'function') {
            var functionResult = args[index](props);

            if ((0, _lodash.isArray)(functionResult)) {
              // styled-is
              cssFromVariableString = (0, _lodash.flattenDeep)(functionResult.map(mapTachyonsFragmentToCSSInJS));
            } else if (typeof functionResult === 'string') {
              // ${({ blue }) => blue && 'bgBlue'}
              cssFromVariableString = mapTachyonsFragmentToCSSInJS(functionResult);
            }
          }

          var cssFromVariable = cssFromVariableString || [];
          return [].concat(_toConsumableArray(cssFromString), _toConsumableArray(cssFromVariable), _toConsumableArray(cssFromExpressions));
        })))
      );
    };

    return mapPropsToCSSInJS;
  };
}