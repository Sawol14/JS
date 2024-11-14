// 주사위 던지기 (랜덤 함수)
document.addEventListener('DOMContentLoaded', () => {
  const result = cnts;
  for (let i = 0; i < result.length; i++) {
    const con = document.createElement('div');
    con.classList.add('graph');
    const d = document.createElement('div');
    d.classList.add('stick');
    const n = document.createElement('div');
    n.classList.add('label');
    const c = document.createElement('div');
    c.classList.add('value');
    n.textContent = `숫자 ${i+1}:`;
    n.style.marginLeft = '10px';
    c.textContent = `${result[i]}`;
    c.style.color = 'blue';
    c.style.fontWeight = 'bold';
    con.append(n, d, c);
    con.style.display = 'flex';
    document.body.append(con);
  }
  let stks = document.querySelectorAll('.graph div');
  stks.forEach(s => {
    s.style.margin = '8px';
    s.style.padding = '0.5rem';
    s.style.height = '1rem';
  });

  let lbls = document.querySelectorAll('.label');
  lbls.forEach(l => {
    l.style.marginRight = 0;
  });

  let divs = document.querySelectorAll('.stick');
  divs.forEach((d, i) => {
    d.style.backgroundColor = 'yellow';
    d.style.border = '1px solid black';
    d.style.maxWidth = '80vw';
    d.style.margin = 'auto 0';
    d.animate([
      {width: '80px'},
      {width: `${result[i] / (total / 2000)}px`}
    ], {
      duration: 600,
      easing: 'ease-in',
      fill: 'both'
    });
  });

});

console.time('random');
for(let i = 0; i < 10; i++) {
  const num = Math.random();
  console.log(num);
}
console.timeEnd('random');

let dice = 6; // 주사위 눈금 수
const cnts = new Array(dice);
for(let i = 0; i < dice; i++) 
  cnts[i] = 0;

let throws = prompt('주사위를 몇 번 돌리겠습니까?', 0); // 주사위를 던질 횟수
console.time(`random 1to6 - {${throws}}번 던지기`); // 연산 시간 측정

for(let i = 0; i < throws; i++) {
  const num = Math.floor(Math.random() * dice + 1);
  // console.log(num);
  cnts[num-1]++; // 횟수 기록
}

console.timeEnd(`random 1to6 - {${throws}}번 던지기`);
let total = 0;
for(let i = 0; i < dice; i++) {
  console.log(`${i+1}: ${cnts[i]}`);
  total += cnts[i];
}
console.log(cnts);
console.log(`총 횟수: ${total} / ${total == throws ? '이상 무' : '이상 있음'}`);
