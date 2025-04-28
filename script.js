let balance = 5000;

function updateBalance() {
  document.getElementById('balance').innerText = balance.toFixed(2);
}

function getBet() {
  return parseFloat(document.getElementById('bet').value);
}

function startAviator() {
  const bet = getBet();
  if (balance >= bet) {
    balance -= bet;
    const multiplier = (Math.random() * 5 + 1).toFixed(2);
    const win = bet * multiplier;
    balance += win;
    document.getElementById('gameArea').innerHTML = `
      <h2>Avião decolou com multiplicador ${multiplier}x!</h2>
      <p>Você ganhou R$${win.toFixed(2)}</p>
    `;
  } else {
    alert('Saldo insuficiente!');
  }
  updateBalance();
}

function startMines() {
  const bet = getBet();
  if (balance >= bet) {
    balance -= bet;
    const win = Math.random() > 0.5 ? bet * 2 : 0;
    balance += win;
    document.getElementById('gameArea').innerHTML = win > 0
      ? `<h2>Você encontrou um diamante!</h2><p>Ganhou R$${win.toFixed(2)}</p>`
      : `<h2>Explodiu na mina!</h2><p>Perdeu sua aposta!</p>`;
  } else {
    alert('Saldo insuficiente!');
  }
  updateBalance();
}

function startTiger() {
  const bet = getBet();
  if (balance >= bet) {
    balance -= bet;
    const win = Math.random() > 0.6 ? bet * 3 : 0;
    balance += win;
    document.getElementById('gameArea').innerHTML = win > 0
      ? `<h2>O Tigre rugiu!</h2><p>Você ganhou R$${win.toFixed(2)}</p>`
      : `<h2>O Tigre dormiu...</h2><p>Você perdeu!</p>`;
  } else {
    alert('Saldo insuficiente!');
  }
  updateBalance();
}

function startRoulette() {
  const bet = getBet();
  if (balance >= bet) {
    balance -= bet;
    const colors = ['Vermelho', 'Preto', 'Verde'];
    const chosen = colors[Math.floor(Math.random() * colors.length)];
    let win = 0;
    if (chosen === 'Verde') win = bet * 14;
    else if (chosen === 'Vermelho' || chosen === 'Preto') win = bet * 2;
    balance += win;
    document.getElementById('gameArea').innerHTML = `
      <h2>Roleta: ${chosen}!</h2>
      <p>${win > 0 ? `Você ganhou R$${win.toFixed(2)}` : 'Perdeu!'}</p>
    `;
  } else {
    alert('Saldo insuficiente!');
  }
  updateBalance();
}

// Atualiza o saldo inicial
updateBalance();
