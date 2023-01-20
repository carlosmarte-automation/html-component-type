import { minimatch } from "minimatch";

import types, { typeKeys } from "./types";

// const regexpNames =  /First_Name: (?<firstname>\w+)/mg;
// for (const match of personList.matchAll(regexpNames)) {
//   console.log(`Hello ${match.groups.firstname} ${match.groups.lastname}`);
// }

export const REGEX = new RegExp(
  "(" +
    Object.entries(types)
      .map(([key, value]) => `(?<${key}>^(${value.join("|")})$)`)
      .join("|") +
    ")"
);


export const matches = (tag) => {
    let results = String(tag).match(REGEX);
    return results.groups ? typeKeys.find((key) => results.groups[key]) : null;
}