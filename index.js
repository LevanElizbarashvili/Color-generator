const generatedColors = document.getElementById("clrs");
const btn = document.getElementById("color-btn");

function main() {
  const hexId = document.getElementById("clr").value.slice(1);
  const modes = document.getElementById("schemes").value;
  const url = `https://www.thecolorapi.com/scheme?hex=${hexId}&mode=${modes}&count=5`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => render(data));
}

function render(clrData) {
  let html = "";
  const colorArr = clrData.colors;
  for (let i = 0; i < colorArr.length; i++) {
    html += `<div class="container">
    <div class="color" style="background-color: ${clrData.colors[i].hex.value}"></div>
    <p>${clrData.colors[i].hex.value}</p></div>`;
  }
  generatedColors.innerHTML = html;
}

function reRender() {
  main();
}

btn.addEventListener("click", reRender);
