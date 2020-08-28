/* eslint-disable quotes */
import { compact, flattenDeep, isArray, union } from 'lodash';
import { camelCaseToDash } from './ui-helpers';
import tachyons from './tachyons';

function lexer(stringWithSpace) {
  return compact(stringWithSpace ? stringWithSpace.split(/\s/) : '');
}

function getTachyonsCSS(shorthand) {
  return tachyons[shorthand];
}

function mapTachyonsFragmentToCSSInJS(fragment) {
  return lexer(fragment).map(getTachyonsCSS);
}

export default function ty(tachyonsClassNameStrings, ...keys) {
  // eslint-disable-next-line func-names
  return function (...args) {
    let cssFromExpressions = [];

    keys.forEach((key) => {
      const value = typeof key === 'function' ? key.bind()(args[args.length - 1]) : key;
      cssFromExpressions.push(mapTachyonsFragmentToCSSInJS(value));
    });
    cssFromExpressions = flattenDeep(cssFromExpressions);
    if (typeof tachyonsClassNameStrings === 'function') {
      const ComponentClass = tachyonsClassNameStrings;
      const { name: componentSelector, styles: componentStyles } = new ComponentClass();
      const tachyonsClassNameStringsParam = args[0];
      let inline = '';
      if (tachyonsClassNameStringsParam[0]) {
        const fragments = mapTachyonsFragmentToCSSInJS(tachyonsClassNameStringsParam[0]);
        fragments.map((item) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          Object.keys(item).forEach((key) => {
            const isMediaQuery = key.charAt(0) === '@';
            if (isMediaQuery) {
              const mediaQueryProperty = item[key];
              inline += `${key} {`;
              Object.keys(mediaQueryProperty).forEach((mediaQueryPropertyKey) => {
                const mediaQueryPropertyValue = mediaQueryProperty[mediaQueryPropertyKey];
                return (inline += `${mediaQueryPropertyKey}: ${mediaQueryPropertyValue};`);
              });
              return (inline += `}`);
            }
            return (inline += `${key}: ${item[key]};`);
          })
        );
      }
      const regex = new RegExp(`(.${camelCaseToDash(componentSelector)})+([{.#~ ]{1})`, 'gm');
      return `${componentStyles.replace(regex, '$2')} { ${inline} }`;
    }

    const mapPropsToCSSInJS = (props) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      union(
        flattenDeep(
          tachyonsClassNameStrings.map((fragment, index) => {
            /** get tachyons css from template literal */
            const cssFromString = mapTachyonsFragmentToCSSInJS(fragment);
            /** get tachyons css string from what's inside ${xxx} */
            let cssFromVariableString;
            if (typeof args[index] === 'string') {
              cssFromVariableString = mapTachyonsFragmentToCSSInJS(args[index]);
            } else if (typeof args[index] === 'function') {
              const functionResult = args[index](props);
              if (isArray(functionResult)) {
                // styled-is
                cssFromVariableString = flattenDeep(functionResult.map(mapTachyonsFragmentToCSSInJS));
              } else if (typeof functionResult === 'string') {
                // ${({ blue }) => blue && 'bgBlue'}
                cssFromVariableString = mapTachyonsFragmentToCSSInJS(functionResult);
              }
            }
            const cssFromVariable = cssFromVariableString || [];
            return [...cssFromString, ...cssFromVariable, ...cssFromExpressions];
          })
        )
      );

    return mapPropsToCSSInJS;
  };
}
