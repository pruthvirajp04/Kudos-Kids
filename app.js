// Helper functions
let qs = (selector, context = document) => context.querySelector(selector);
let qsa = (selector, context = document) =>
  Array.from(context.querySelectorAll(selector));

// Get gallery item into Lightbox
function openLightbox(e) {
  const gitem = e.currentTarget,
    itemimg = qs("img", gitem),
    itemtext = qs(".gallery-item-text", gitem),
    itemUrl = itemtext.dataset.url;
  // Fill in the elements of lightbox.
  const lightbox = qs(".lightbox"),
    lightboximg = qs(".lb-img", lightbox),
    lightboxtext = qs(".lb-text", lightbox),
    lightboxDataURL = qs(".lb-url", lightbox);
  lightboximg.onload = () => {
    // fires as soon as image.src is assigned a URL.
    lightboxtext.innerHTML = itemtext.innerHTML;
    lightboxDataURL.setAttribute("href", itemUrl);
    lightbox.classList.add("open");
  };
  // Assigns a relative url. This will fire onload.
  lightboximg.setAttribute("src", itemimg.getAttribute("src"));
}

function closeLightbox(e) {
  e.preventDefault();
  const lightbox = e.currentTarget.closest(".lightbox");
  lightbox.classList.remove("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = qs(".lightbox.preload");
  if (lightbox) lightbox.classList.remove("preload");

  const gitems = qsa(".gallery-item");
  gitems.forEach((el) => el.addEventListener("click", openLightbox));

  const lbclose = qs(".lightbox .close");
  if (lbclose) lbclose.addEventListener("click", closeLightbox);
});
