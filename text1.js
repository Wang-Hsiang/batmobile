const N = 100;
const batMobilex=(N)=>{
  let x = 0;
  let y = 1;

  for (let i = 1; i <= N; i++) {
    x += i * y;
    y *= -1;
  }
  return x;
}
const result = batMobilex(N);
console.log(`總和為：${result}`);