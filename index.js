const hexId = document.getElementById("clr").value.slice(1);
const modes = document.getElementById("schemes").value;
const generatedColors = document.getElementById("clrs");
const btn = document.getElementById("color-btn");

fetch(`https://www.thecolorapi.com/scheme?hex=${hexId}&mode=${modes}&count=5`)
  .then((res) => res.json())
  .then((data) => render(data));

function render(data) {
  let html = "";
  const colorArr = data.colors;
  for (let i = 0; i < colorArr.length; i++) {
    html += `<div class="container">
      <div class="color" style="background-color: ${data.colors[i].hex.value}"></div>
      <p>${data.colors[i].hex.value}</p></div>`;
  }
  generatedColors.innerHTML = html;
}

btn.addEventListener("click", function (event) {
  event.preventDefault();
  location.reload();
});
