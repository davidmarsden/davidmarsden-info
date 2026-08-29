document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".photo-showcase-gallery .microblog_collection");
  if (!gallery) return;

  const images = Array.from(gallery.querySelectorAll("img"));
  if (!images.length) return;

  const classify = () => {
    const landscapes = [];

    images.forEach((img) => {
      img.classList.remove("is-featured-landscape");
      if (!img.naturalWidth || !img.naturalHeight) return;

      const ratio = img.naturalWidth / img.naturalHeight;
      if (ratio >= 1.35) landscapes.push(img);
    });

    landscapes.forEach((img, index) => {
      if (index % 5 === 0) img.classList.add("is-featured-landscape");
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
