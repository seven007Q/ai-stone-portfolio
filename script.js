const header = document.querySelector("[data-header]");

function updateHeader() {
  if (!header) return;
  header.classList.toggle("is-solid", window.scrollY > 24);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

document.querySelectorAll("video").forEach((video) => {
  video.addEventListener("play", () => {
    document.querySelectorAll("video").forEach((other) => {
      if (other !== video) other.pause();
    });
  });
});

document.querySelectorAll("[data-comparison]").forEach((comparison) => {
  const range = comparison.querySelector("input[type='range']");
  const split = comparison.querySelector(".split-view");
  if (!range || !split) return;

  function updateSplit() {
    split.style.setProperty("--split", `${range.value}%`);
  }

  updateSplit();
  range.addEventListener("input", updateSplit);
});
