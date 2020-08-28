export default {};

export const camelCaseToDash = (str) => str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
