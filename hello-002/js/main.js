const onStart = () => {};
document.addEventListener("DOMContentLoaded", onStart);
document.addEventListener("DOMContentLoaded", () => {
  const divs = document.querySelectorAll("div");
  const colors = ["blue", "red", "green", "yellow", "black"];
  let count = 0;
  const onClickHandler = (e) => {
    e.target.style.backgroundColor = colors[count++ % colors.length];
  };

  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", onClickHandler);
  }
});
