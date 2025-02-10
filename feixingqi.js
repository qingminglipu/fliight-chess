const rollButton = document.getElementById('rollButton');
const messageDiv = document.getElementById('message');
const taskMessageDiv = document.getElementById('taskMessage');
const boardCells = document.querySelectorAll('.cell');
let currentPosition1 = 0;
let currentPosition2 = 0;

// 初始状态：情侣飞行器
const plane1 = document.createElement('div');
plane1.classList.add('plane');
boardCells[0].appendChild(plane1);

const plane2 = document.createElement('div');
plane2.classList.add('plane', 'plane2');
boardCells[0].appendChild(plane2);

// 每个格子的任务
const tasks = [
    "你走到了第一格，什么也没有发生。",
    "走到这里，告诉你的一件秘密！",
    "你遇到了爱情的难关，想一想你的伴侣。",
    "遇到障碍，跳过一格。",
    "回答一个问题：你最喜欢的颜色是什么？",
    "回答一个问题：你最喜欢的食物是什么？",
    "你赢得了一颗星星，前进两格！",
    "前进两格，但你遇到了风暴，需要停顿一轮。",
    "好运！你可以跳跃到第十格。",
    "前进三格，祝你好运！",
    "你需要交换位置和另一位玩家。",
    "你走到了一处秘密基地，可以前进五格！",
    "你需要停留一轮，无法继续。",
    "再前进一格，你会获得额外奖励。",
    "回答问题：你最喜欢的电影是什么？",
    "一块幸运的金币，前进四格。",
    "爱与和平，让你跳过一个格子。",
    "你和爱人获得了强大的力量，继续前进。",
    "再前进两格，祝你们的爱情越来越甜。",
    "快到了，最后前进一格，爱情的终点！"
];

// 掷骰子
rollButton.addEventListener('click', () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    messageDiv.textContent = `你掷出了 ${diceRoll} 点！`;

    // 轮流移动情侣飞行器
    if (currentPosition1 <= 20) {
        movePlane(plane1, currentPosition1, diceRoll);
        currentPosition1 += diceRoll;
        showTask(currentPosition1);
    } else if (currentPosition2 <= 20) {
        movePlane(plane2, currentPosition2, diceRoll);
        currentPosition2 += diceRoll;
        showTask(currentPosition2);
    }

    if (currentPosition1 === 20 || currentPosition2 === 20) {
        messageDiv.textContent += " 恭喜，一方获胜！";
        rollButton.disabled = true;  // 禁用掷骰子按钮
    }
});

function movePlane(plane, currentPosition, diceRoll) {
    const targetCell = boardCells[currentPosition + diceRoll];
    if (targetCell) {
        targetCell.appendChild(plane);
    }
}

// 显示任务
function showTask(position) {
    taskMessageDiv.textContent = tasks[position - 1] || "";
}
