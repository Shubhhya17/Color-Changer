document.getElementById("colorButton").addEventListener("click", () => {
  document.body.style.backgroundColor = `rgb(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255})`;
});
