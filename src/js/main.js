let xp = localStorage.getItem('warpXP') || 0;

function updateXP() {
  document.getElementById('xpDisplay').textContent = `${xp} XP`;
  document.getElementById('xpProgress').style.width = `${xp % 1000 / 10}%`;
}

document.getElementById('claimBtn').addEventListener('click', () => {
  xp = parseInt(xp) + 100;
  localStorage.setItem('warpXP', xp);
  updateXP();
});

updateXP();

let currentGas = 0;

async function fetchGas() {
  try {
    const res = await fetch('https://api.owlracle.info/v4/base/gas?apikey=demo');
    const data = await res.json();
    currentGas = data.speeds[1].estimatedFee;
    const needle = document.getElementById('needle');
    const val = Math.min((currentGas / 100) * 100, 100);
    needle.style.left = `${val}%`;
    document.getElementById('gasValue').textContent = `${currentGas.toFixed(1)} Gwei`;
  } catch (e) {
    document.getElementById('gasValue').textContent = 'Error';
  }
}

setInterval(fetchGas, 30000);
fetchGas();

const mockFeed = [
  { type: "Mint", who: "vitalik.eth", what: "Zorb #420" },
  { type: "Trade", who: "satoshi.eth", what: "420 $WAI" },
];

mockFeed.forEach(item => {
  const el = document.createElement('div');
  el.className = 'activity-item';
  el.innerHTML = `<p><b>${item.type}</b>: ${item.what} by ${item.who}</p>`;
  document.getElementById('activityList').appendChild(el);
});

document.getElementById('walletBtn').addEventListener('click', () => {
  alert('Wallet Connect kommer snart...');
});
