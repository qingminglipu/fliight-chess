// 获取 DOM 元素
const gameBoard = document.getElementById('game-board');
const cells = gameBoard.querySelectorAll('.cell');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const rollDiceButton = document.getElementById('roll-dice');
const resultDiv = document.getElementById('result');

// 初始化玩家位置
let player1Position = 0;
let player2Position = 0;
let currentPlayer = 1;

// 投掷色子函数
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// 移动玩家函数
function movePlayer(player, position) {
  const cell = cells[position];
  const rect = cell.getBoundingClientRect();
  player.style.left = rect.left + rect.width / 2 - player.offsetWidth / 2 + 'px';
  player.style.top = rect.top + rect.height / 2 - player.offsetHeight / 2 + 'px';
}

// 处理投掷色子事件
rollDiceButton.addEventListener('click', () => {
  const diceValue = rollDice();
  if (currentPlayer === 1) {
    player1Position += diceValue;
    if (player1Position >= cells.length) {
      player1Position = cells.length - 1;
    }
    movePlayer(player1, player1Position);
    const description = cells[player1Position].dataset.description;
    resultDiv.textContent = `玩家1投掷出 ${diceValue} 点，移动到第 ${player1Position + 1} 格，任务：${description}`;
    currentPlayer = 2;
  } else {
    player2Position += diceValue;
    if (player2Position >= cells.length) {
      player2Position = cells.length - 1;
    }
    movePlayer(player2, player2Position);
    const description = cells[player2Position].dataset.description;
    resultDiv.textContent = `玩家2投掷出 ${diceValue} 点，移动到第 ${player2Position + 1} 格，任务：${description}`;
    currentPlayer = 1;
  }
});

// 初始化玩家位置
movePlayer(player1, player1Position);
movePlayer(player2, player2Position);