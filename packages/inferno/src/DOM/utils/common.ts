/**
 * @module Inferno
 */ /** TypeDoc Comment */

import { isNull, isNullOrUndef } from "inferno-shared";
import { svgNS } from "../constants";

// We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared
export const EMPTY_OBJ = {};

if (process.env.NODE_ENV !== "production") {
  Object.freeze(EMPTY_OBJ);
}

export function setTextContent(dom, text: string | number) {
  if (text !== "") {
    dom.textContent = text;
  } else {
    dom.appendChild(document.createTextNode(""));
  }
}

export function updateTextContent(dom, text: string | number) {
  const textNode = dom.firstChild;

  // Guard against external change on DOM node.
  if (isNull(textNode)) {
    setTextContent(dom, text);
  } else {
    textNode.nodeValue = text;
  }
}

export function appendChild(parentDOM, dom) {
  parentDOM.appendChild(dom);
}

export function insertOrAppend(parentDOM, newNode, nextNode) {
  if (isNullOrUndef(nextNode)) {
    appendChild(parentDOM, newNode);
  } else {
    parentDOM.insertBefore(newNode, nextNode);
  }
}

export function documentCreateElement(tag, isSVG: boolean): Element {
  if (isSVG === true) {
    return document.createElementNS(svgNS, tag);
  } else {
    return document.createElement(tag);
  }
}

export function replaceChild(parentDOM: Element, newDom: Element, lastDom: Element) {
  parentDOM.replaceChild(newDom, lastDom);
}

export function removeChild(parentDOM: Element, dom: Element) {
  parentDOM.removeChild(dom);
}

export function isKeyed(lastChildren: any[], nextChildren: any[]): boolean {
  return (
    nextChildren.length > 0 &&
    !isNullOrUndef(nextChildren[0]) &&
    !isNullOrUndef(nextChildren[0].key) &&
    lastChildren.length > 0 &&
    !isNullOrUndef(lastChildren[0]) &&
    !isNullOrUndef(lastChildren[0].key)
  );
}

export const componentToDOMNodeMap = new Map();

export function callAll(arrayFn: Function[]) {
  let listener;
  while ((listener = arrayFn.shift()) !== undefined) {
    listener();
  }
}