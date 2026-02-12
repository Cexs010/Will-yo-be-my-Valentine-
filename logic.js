const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const screen = document.getElementById("screen");
const loveScreen = document.getElementById("loveScreen");

// NO runs away - funciona con mouseover y touch
function makeNoButtonRun() {
  // Activar position fixed cuando empieza a huir
  if (noBtn.style.position !== "fixed") {
    noBtn.style.position = "fixed";
  }

  const padding = 30; // distancia mínima al borde

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth - padding;
  const maxY = window.innerHeight - btnHeight - padding;

  const x = Math.random() * (maxX - padding) + padding;
  const y = Math.random() * (maxY - padding) + padding;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Para desktop
noBtn.addEventListener("mouseover", makeNoButtonRun);

// Para móvil/touch
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // Evitar comportamiento por defecto
  makeNoButtonRun();
});


// YES click
yesBtn.addEventListener("click", () => {
  createPetals();

  setTimeout(() => {
    screen.style.transition = "opacity 0.4s ease";
    screen.style.opacity = "0";
  }, 300);

  setTimeout(() => {
    screen.style.display = "none";
    loveScreen.classList.add("show");
  }, 1200);
});

// Pétalos de transición
function createPetals() {
  const colors = ["#ff4e88", "#ff99c8", "#ffb3d1", "#ff2e63", "#ffd6e7", "#fff"];
  const total = 40;

  for (let i = 0; i < total; i++) {
    setTimeout(() => {
      const petal = document.createElement("div");
      petal.classList.add("petal");

      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;

      const angle = Math.random() * 360;
      const distance = 150 + Math.random() * 300;
      const dx = Math.cos((angle * Math.PI) / 180) * distance;
      const dy = Math.sin((angle * Math.PI) / 180) * distance;

      const size = 18 + Math.random() * 22;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const duration = 0.7 + Math.random() * 0.5;
      const rotation = Math.random() * 720 - 360;

      petal.style.cssText = `
        left: ${startX}px;
        top: ${startY}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        --dx: ${dx}px;
        --dy: ${dy}px;
        --rot: ${rotation}deg;
        animation: petalBurst ${duration}s ease-out forwards;
      `;

      document.body.appendChild(petal);
      setTimeout(() => petal.remove(), duration * 1000 + 100);
    }, i * 18);
  }
}

// hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3.6 + 6.3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 800);