
export const createRegex = (types) => new RegExp(
  "(" +
  types
      .map(([key, value]) => `(?<${key}>^(${value.join("|")})$)`)
      .join("|") +
    ")"
);

export const matches = (typeKeys, REGEX) => (tag) => {
    let results = String(tag).match(REGEX);
    return results.groups ? typeKeys.find((key) => results.groups[key]) : null;
}