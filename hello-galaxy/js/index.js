document.addEventListener("DOMContentLoaded", () => {
  const imageElement = document.querySelector("section.img");
  const images = [
    "./images/slide.jpg",
    "./images/p1.jpg",
    "./images/p2.jpg",
    "./images/p3.jpg",
  ];
  let count = 0;
  const onClickHandler = () => {
    imageElement.src = images[count++ % images.length];
  };
  const container = document.querySelector("section.main");
  container.addEventListener("click", onClickHandler);
});
