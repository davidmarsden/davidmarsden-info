document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".photo-showcase-gallery .microblog_collection");
  if (!gallery) return;

  const images = Array.from(gallery.querySelectorAll("img"));
  if (!images.length) return;

  const captions = window.photoShowcaseCaptions || {};

  const filenameFor = (img) => {
    try {
      const url = new URL(img.currentSrc || img.src, window.location.href);
      return decodeURIComponent(url.pathname.split("/").pop() || "");
    } catch (error) {
      return "";
    }
  };

  const addCaption = (img) => {
    const metadata = captions[filenameFor(img)];
    if (!metadata || (!metadata.title && !metadata.caption)) return;

    const figure = document.createElement("figure");
    figure.className = "photo-showcase-item";

    img.parentNode.insertBefore(figure, img);
    figure.appendChild(img);

    const figcaption = document.createElement("figcaption");
    figcaption.className = "photo-showcase-caption";

    if (metadata.title) {
      const title = document.createElement("strong");
      title.className = "photo-showcase-caption-title";
      title.textContent = metadata.title;
      figcaption.appendChild(title);
    }

    if (metadata.caption) {
      const text = document.createElement("span");
      text.className = "photo-showcase-caption-text";
      text.textContent = metadata.caption;
      figcaption.appendChild(text);
    }

    figure.appendChild(figcaption);
  };

  images.forEach(addCaption);

  const gridItemFor = (img) => img.closest(".photo-showcase-item") || img;

  const classify = () => {
    const landscapes = [];

    images.forEach((img) => {
      const item = gridItemFor(img);
      item.classList.remove("is-featured-landscape", "is-featured-panorama");
      if (!img.naturalWidth || !img.naturalHeight) return;

      const ratio = img.naturalWidth / img.naturalHeight;

      if (ratio >= 1.8) {
        item.classList.add("is-featured-panorama");
        return;
      }

      if (ratio >= 1.35) landscapes.push(item);
    });

    landscapes.forEach((item, index) => {
      if (index % 3 === 0) item.classList.add("is-featured-landscape");
    });
  };

  let waiting = images.filter((img) => !img.complete).length;

  if (!waiting) {
    classify();
    return;
  }

  images.forEach((img) => {
    if (img.complete) return;
    const done = () => {
      waiting -= 1;
      if (waiting === 0) classify();
    };
    img.addEventListener("load", done, { once: true });
    img.addEventListener("error", done, { once: true });
  });
});
