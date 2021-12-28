// Mobile menu click event
export const mobileMenuClickEvent = function () {
  this.buttonOpen.addEventListener("click", () =>
    this.nav.classList.add("is-active")
  );

  this.buttonClose.addEventListener("click", () =>
    this.nav.classList.remove("is-active")
  );
};

// Show header shadow on scroll
export const showHeaderShadowOnScroll = function () {
  window.addEventListener("wheel", (e) =>
    e.deltaY === 100
      ? this.header.classList.add("header-scroll")
      : this.header.classList.remove("header-scroll")
  );
};
