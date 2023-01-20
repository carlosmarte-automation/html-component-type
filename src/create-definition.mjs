const createDefinition = (types) => {
  const map = new Map(types);
  const entries = Array.from(map.entries());
  const typeKeys = Array.from(map.keys());
  const REGEX = new RegExp(
    "(" +
      entries
        .map(([key, value]) => `(?<${key}>^(${value.join("|")})$)`)
        .join("|") +
      ")"
  );


  const matches = (tag) => {
    let results = String(tag).match(REGEX);
    if(!results) return null;
    return results.groups ? typeKeys.find((key) => results.groups[key]) : null;
  };

  return matches;
};

export default createDefinition;
