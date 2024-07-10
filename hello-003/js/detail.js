document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("section.main");

  const importHTML = (tag, url) => {
    const xhr = new XMLHttpRequest();
  };
  const onImageClickHandler = (e) => {
    const target = e.target;
    if (target.tagName !== "IMG") return false;
    const altText = e.target.getAttribute("alt");
    alert(altText);
  };
  container.addEventListener("click", onImageClickHandler);
});
