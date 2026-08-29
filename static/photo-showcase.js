document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".photo-showcase-gallery .microblog_collection");
  if (!gallery) return;

  const items = Array.from(gallery.querySelectorAll("a")).filter((item) => item.querySelector("img"));
  if (!items.length) return;

  const classify = () => {
    const landscapes = [];

    items.forEach((item) => {
      item.classList.remove("is-featured-landscape");
      const img = item.querySelector("img");
      if (!img || !img.naturalWidth || !img.naturalHeight) return;

      const ratio = img.naturalWidth / img.naturalHeight;
      if (ratio >= 1.35) landscapes.push(item);
    });

    landscapes.forEach((item, index) => {
      if (index % 5 === 0) item.classList.add("is-featured-landscape");
    });
  };

  const images = items.map((item) => item.querySelector("img"));
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
