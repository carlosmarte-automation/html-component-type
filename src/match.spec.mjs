import tags from "html-tags";
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
} from "./types";
import { REGEX, matches } from "./match";

test("match html tags", () => {
  for (let tag of tags) {
    expect(matches("div")).toBeDefined();
  }
});

test("match IMAGERY", () => {
  for (let tag of IMAGERY) {
    expect(matches(tag)).toEqual("IMAGERY");
  }
});

test("match FORM", () => {
  for (let tag of FORM) {
    expect(matches(tag)).toEqual("FORM");
  }
});

test("match FORMATTED", () => {
  for (let tag of FORMATTED) {
    expect(matches(tag)).toEqual("FORMATTED");
  }
});

test("match BUTTON", () => {
  for (let tag of BUTTON) {
    expect(matches(tag)).toEqual("BUTTON");
  }
});

test("match NAVIGATION", () => {
  for (let tag of NAVIGATION) {
    expect(matches(tag)).toEqual("NAVIGATION");
  }
});
test("match VECTOR", () => {
  for (let tag of VECTOR) {
    expect(matches(tag)).toEqual("VECTOR");
  }
});

test("match BREAK", () => {
  for (let tag of BREAK) {
    expect(matches(tag)).toEqual("BREAK");
  }
});

test("match TABLE", () => {
  for (let tag of TABLE) {
    expect(matches(tag)).toEqual("TABLE");
  }
});

test("match DIGITAL", () => {
  for (let tag of DIGITAL) {
    expect(matches(tag)).toEqual("DIGITAL");
  }
});

test("match BLOCK", () => {
  for (let tag of BLOCK) {
    expect(matches(tag)).toEqual("BLOCK");
  }
});

test("match DOCUMENT", () => {
  for (let tag of DOCUMENT) {
    expect(matches(tag)).toEqual("DOCUMENT");
  }
});

test("match PREFORMATTED", () => {
  for (let tag of PREFORMATTED) {
    expect(matches(tag)).toEqual("PREFORMATTED");
  }
});

test("match SELECTOR", () => {
  for (let tag of SELECTOR) {
    expect(matches(tag)).toEqual("SELECTOR");
  }
});

test("match LIST", () => {
  for (let tag of LIST) {
    expect(matches(tag)).toEqual("LIST");
  }
});

test("match HEADER", () => {
  for (let tag of HEADER) {
    expect(matches(tag)).toEqual("HEADER");
  }
});
test("match TEXT", () => {
  for (let tag of TEXT) {
    expect(matches(tag)).toEqual("TEXT");
  }
});

test("match PROGRESSBAR", () => {
  for (let tag of PROGRESSBAR) {
    expect(matches(tag)).toEqual("PROGRESSBAR");
  }
});

test("match WEBCOMPONENTS", () => {
  for (let tag of WEBCOMPONENTS) {
    expect(matches(tag)).toEqual("WEBCOMPONENTS");
  }
});

test("match UN", () => {
      expect(matches('xyz')).toEqual("UNKNOWN");
  });