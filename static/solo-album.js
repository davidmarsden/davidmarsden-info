(function () {
  const root = document.querySelector('[data-album-player]');
  if (!root) return;

  const audio = root.querySelector('[data-audio]');
  const tracks = Array.from(root.querySelectorAll('[data-track]'));
  const nowTitle = root.querySelector('[data-now-title]');
  const prev = root.querySelector('[data-prev]');
  const next = root.querySelector('[data-next]');
  let current = 0;

  function setActive(index, autoplay) {
    if (index < 0 || index >= tracks.length) return;
    current = index;
    const track = tracks[index];
    const src = track.dataset.src;
    const title = track.dataset.title;

    tracks.forEach((item, i) => {
      item.classList.toggle('is-active', i === index);
      const icon = item.querySelector('.solo-album-track-icon');
      if (icon) icon.textContent = i === index && !audio.paused ? '❚❚' : '▶';
    });

    if (audio.getAttribute('src') !== src) {
      audio.setAttribute('src', src);
      audio.load();
    }

    nowTitle.textContent = title;
    prev.disabled = current === 0;
    next.disabled = current === tracks.length - 1;

    if (autoplay) {
      const promise = audio.play();
      if (promise && typeof promise.catch === 'function') promise.catch(function () {});
    }
  }

  tracks.forEach((track, index) => {
    const button = track.querySelector('[data-play-track]');
    button.addEventListener('click', function (event) {
      event.preventDefault();
      if (current === index && !audio.paused) {
        audio.pause();
      } else {
        setActive(index, true);
      }
    });
  });

  prev.addEventListener('click', function () {
    if (current > 0) setActive(current - 1, true);
  });

  next.addEventListener('click', function () {
    if (current < tracks.length - 1) setActive(current + 1, true);
  });

  audio.addEventListener('play', function () {
    tracks.forEach((item, i) => {
      const icon = item.querySelector('.solo-album-track-icon');
      if (icon) icon.textContent = i === current ? '❚❚' : '▶';
    });
  });

  audio.addEventListener('pause', function () {
    const icon = tracks[current] && tracks[current].querySelector('.solo-album-track-icon');
    if (icon) icon.textContent = '▶';
  });

  audio.addEventListener('ended', function () {
    if (current < tracks.length - 1) {
      setActive(current + 1, true);
    } else {
      const icon = tracks[current] && tracks[current].querySelector('.solo-album-track-icon');
      if (icon) icon.textContent = '▶';
    }
  });

  setActive(0, false);
})();