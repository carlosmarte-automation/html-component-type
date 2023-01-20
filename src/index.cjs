
import getSelector from "axe-selector";
import absoluteCssPathSelector from "./absolute-css-path-selector.js";

console.log(getSelector)
export { absoluteCssPathSelector, getSelector }

const absoluteCssPathSelectors = (element, options) => {
    return {
        locator: getSelector.default(element, options),
        absolute: absoluteCssPathSelector(element, options).join(' ')
    }
};

export default absoluteCssPathSelectors;