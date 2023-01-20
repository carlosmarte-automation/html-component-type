import tags from "html-tags";
import { createRegex, matches } from "./matches";
import {
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
  UNKNOWN
} from "./types";

test("regex image", () => {
  const entries = [
    ['IMAGERY', IMAGERY],
  ]
  const regex = createRegex(entries)
  expect("img".match(regex)).toBeDefined();
  expect("picture".match(regex)).toBeDefined();
  expect("div".match(regex)).toEqual(null);
});

test("block matches", () => {
  const entries = [
    ['IMAGERY', IMAGERY],
    ['BLOCK', BLOCK],
    ['UNKNOWN', UNKNOWN],
  ]

  const map = new Map(entries);
  const typeKeys = Array.from(map.keys());
  const regex = createRegex(entries)
  const match = matches(typeKeys, regex)
  expect(match("img")).toEqual('IMAGERY');
  expect(match("picture")).toEqual('IMAGERY');
  expect(match("div")).toEqual('BLOCK');
  expect(match('xzy')).toEqual('UNKNOWN');
});


