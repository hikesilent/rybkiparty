// Dynamiczny rok w stopce
document.getElementById('current-year').textContent = new Date().getFullYear();

// Animacja rybek
const fishes = document.querySelectorAll('.fish-animation');
fishes.forEach((fish, index) => {
  fish.style.animationDelay = `${index * 0.5}s`;
});