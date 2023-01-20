import tags from "html-tags";
import defaultDefinition from "./default-definition";
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


test("match html tags", () => {
  for (let tag of tags) {
    expect(defaultDefinition("div")).toBeDefined();
  }
});


test("match IMAGERY", () => {
  for (let tag of IMAGERY) {
    expect(defaultDefinition(tag)).toEqual("IMAGERY");
  }
});

test("match FORM", () => {
  for (let tag of FORM) {
    expect(defaultDefinition(tag)).toEqual("FORM");
  }
});

test("match FORMATTED", () => {
  for (let tag of FORMATTED) {
    expect(defaultDefinition(tag)).toEqual("FORMATTED");
  }
});

test("match BUTTON", () => {
  for (let tag of BUTTON) {
    expect(defaultDefinition(tag)).toEqual("BUTTON");
  }
});

test("match NAVIGATION", () => {
  for (let tag of NAVIGATION) {
    expect(defaultDefinition(tag)).toEqual("NAVIGATION");
  }
});
test("match VECTOR", () => {
  for (let tag of VECTOR) {
    expect(defaultDefinition(tag)).toEqual("VECTOR");
  }
});

test("match BREAK", () => {
  for (let tag of BREAK) {
    expect(defaultDefinition(tag)).toEqual("BREAK");
  }
});

test("match TABLE", () => {
  for (let tag of TABLE) {
    expect(defaultDefinition(tag)).toEqual("TABLE");
  }
});

test("match DIGITAL", () => {
  for (let tag of DIGITAL) {
    expect(defaultDefinition(tag)).toEqual("DIGITAL");
  }
});

test("match BLOCK", () => {
  for (let tag of BLOCK) {
    expect(defaultDefinition(tag)).toEqual("BLOCK");
  }
});

test("match DOCUMENT", () => {
  for (let tag of DOCUMENT) {
    expect(defaultDefinition(tag)).toEqual("DOCUMENT");
  }
});

test("match PREFORMATTED", () => {
  for (let tag of PREFORMATTED) {
    expect(defaultDefinition(tag)).toEqual("PREFORMATTED");
  }
});

test("match SELECTOR", () => {
  for (let tag of SELECTOR) {
    expect(defaultDefinition(tag)).toEqual("SELECTOR");
  }
});

test("match LIST", () => {
  for (let tag of LIST) {
    expect(defaultDefinition(tag)).toEqual("LIST");
  }
});

test("match HEADER", () => {
  for (let tag of HEADER) {
    expect(defaultDefinition(tag)).toEqual("HEADER");
  }
});
test("match TEXT", () => {
  for (let tag of TEXT) {
    expect(defaultDefinition(tag)).toEqual("TEXT");
  }
});

test("match PROGRESSBAR", () => {
  for (let tag of PROGRESSBAR) {
    expect(defaultDefinition(tag)).toEqual("PROGRESSBAR");
  }
});

test("match WEBCOMPONENTS", () => {
  for (let tag of WEBCOMPONENTS) {
    expect(defaultDefinition(tag)).toEqual("WEBCOMPONENTS");
  }
});

test("match UN", () => {
      expect(defaultDefinition('xyz')).toEqual("UNKNOWN");
  });