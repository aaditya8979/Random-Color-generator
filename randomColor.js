let btn = document.querySelector("button");

function setRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgb = `rgb(${r}, ${g}, ${b})`;
  document.getElementById('color-box').style.background = rgb;
  document.getElementById('rgb-value').textContent = rgb;
}

btn.addEventListener("click", function() {
    let h3 = document.querySelector("h3");
    let newColor = setRandomColor();
})

document.getElementById('random-heading').addEventListener('click', function() {
  const colors = [
    '#ff6f61', '#43e97b', '#38f9d7', '#fc70a1',
    '#f7971e', '#ffd200', '#21d4fd', '#b721ff',
    '#00c3ff', '#ffff1c', '#f7797d'
  ];
  const pick = () => colors[Math.floor(Math.random() * colors.length)];
  const gradient = `linear-gradient(90deg, ${pick()}, ${pick()}, ${pick()})`;
  this.style.background = gradient;
});
