import { mobileMenuClickEvent, showHeaderShadowOnScroll } from "./listeners.js";

// selectors
const Dom = function () {
  // header
  this.header = document.querySelector("header");
  this.nav = document.querySelector(".nav");

  //btns
  this.buttonOpen = document.querySelector("#hamburger");
  this.buttonClose = document.querySelector("#button-close");
};

// methods
Dom.prototype.mobileMenuClickEvent = mobileMenuClickEvent;
Dom.prototype.showHeaderShadowOnScroll = showHeaderShadowOnScroll;

const dom = new Dom();
export { dom };
