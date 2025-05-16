const mockActivities = [
  {
    type: "MINT",
    item: "Zorb #420",
    user: "vitalik.eth",
    value: "0.01 ETH"
  },
  {
    type: "TRADE",
    item: "WarpAI Token",
    user: "satoshi.eth",
    value: "420 $WAI"
  }
];

function loadActivities() {
  const container = document.getElementById('activityList');

  mockActivities.forEach(activity => {
    const item = document.createElement('div');
    item.className = 'activity-item';
    item.innerHTML = `
      <p><strong>${activity.type}</strong>: ${activity.item}</p>
      <p>By ${activity.user} • ${activity.value}</p>
    `;
    container.appendChild(item);
  });
}

loadActivities();
