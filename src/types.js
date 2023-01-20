export const IMAGERY = ["img", "canvas", "picture"];

export const FORM = [
  "input",
  "fieldset",
  "form",
  "label",
  "legend",
  "textarea",
];

export const FORMATTED = [
  "time",
  "abbr",
  "b",
  "bdi",
  "bdo",
  "cite",
  "del",
  "dfn",
  "em",
  "i",
  "ins",
  "kbd",
  "mark",
  "samp",
  "small",
  "strong",
  "sup",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "var",
  "u",
];

export const BUTTON = ["a", "button"];

export const NAVIGATION = ["menu", "menuitem", "nav"];

export const VECTOR = ["area", "math", "svg"];

export const BREAK = ["br", "wbr", "hr"];

export const TABLE = [
  "col",
  "caption",
  "colgroup",
  "tr",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
];

export const DIGITAL = [
  "embed",
  "param",
  "source",
  "track",
  "audio",
  "map",
  "object",
  "video",
];

export const BLOCK = [
  "article",
  "aside",
  "address",
  "blockquote",
  "dialog",
  "div",
  "figcaption",
  "figure",
  "footer",
  "header",
  "hgroup",
  "main",
  "section",
];

export const DOCUMENT = [
  "link",
  "base",
  "meta",
  "head",
  "body",
  "html",
  "iframe",
  "link",
  "noscript",
  "script",
  "title",
  "template",
  "style",
];

export const PREFORMATTED = ["code", "pre"];

export const SELECTOR = [
  "data",
  "datalist",
  "details",
  "optgroup",
  "option",
  "select",
  "summary",
];

export const LIST = ["dd", "dl", "dt", "li", "ol", "ul"];

export const HEADER = ["h1", "h2", "h3", "h4", "h5", "h6"];

export const TEXT = ["p", "span"];

export const PROGRESSBAR = ["meter", "output", "progress"];

export const WEBCOMPONENTS = ["slot", "-"];

export const UNKNOWN = [".+"];

export const types = {
  IMAGERY,
  FORM,
  FORMATTED,
  BUTTON,
  NAVIGATION,
  VECTOR,
  BREAK,
  TABLE,
  DIGITAL,
  BLOCK,
  DOCUMENT,
  PREFORMATTED,
  SELECTOR,
  LIST,
  HEADER,
  TEXT,
  PROGRESSBAR,
  WEBCOMPONENTS,
  UNKNOWN,
};

export const typeKeys = Object.keys(types).sort(function compareFn(a, b) {
  if (
    ["WEBCOMPONENTS", "UNKNOWN"].indexOf(a) === -1 &&
    ["WEBCOMPONENTS", "UNKNOWN"].indexOf(b) === -1
  ) {
    return -1;
  }
  if (a === "WEBCOMPONENTS") {
    return 0;
  }
  if (a === "UNKNOWN") {
    return 1;
  }
  return -1;
});

export default typeKeys.map((key) => [key, types[key]]);
