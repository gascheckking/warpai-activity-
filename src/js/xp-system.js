let xp = localStorage.getItem('warpXP') || 0;

function updateXPDisplay() {
  document.getElementById('xpDisplay').textContent = `${xp} XP`;
  document.getElementById('xpProgress').style.width = `${xp % 1000 / 10}%`;
}

document.getElementById('claimBtn').addEventListener('click', () => {
  xp = parseInt(xp) + 100;
  localStorage.setItem('warpXP', xp);
  updateXPDisplay();
});

updateXPDisplay();
