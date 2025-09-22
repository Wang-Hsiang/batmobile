const prize = [ 
    1 , 2 , 3 , 3 ,
    4 , 4 , 4 , 4 ,
    4 , 5 , 5 , 5 ,
    5 , 5 , 5 , 5 ,
    5 , 5 , 5 , 5 ,
];
prize.sort(() => Math.random() - 0.5);
let time = 1;
while (prize.length > 0) {
  const x = prize.shift(); // 抽走第一個獎品
  console.log(`第 ${time} 次抽獎抽中：${prize}號獎`);
  time++;
}