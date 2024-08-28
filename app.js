// source: udemy_the web developer bootcamp 2004
// 추측 게임 만들기
// 반복문의 이해 증가

// // 게임을 시작하기 위해 최대 범위를 받고 정수형태로 저장함
// let maximum = parseInt(prompt("Enter the maximum nember!"));

// // 유효하지 않은 값 NaN으로 반환된 경우 유효한 값을 입력할 때까지 알림
// while (!maximum) {
//   maximum = parseInt(prompt("Enter a valid number!"));
// }

// // 정답 값을 랜덤으로 생성하기위한 메서드를 사용하고 저장함
// const targetNum = Math.floor(Math.random() * maximum) + 1;

// // 입력한 숫자가 정답이 아닐 때, 추측에 도움이 될 메세지 알림
// let guess = parseInt(prompt("Enter your first guess!"));

// // 사용자가 정답을 맞히기 위해 시도한 횟수 알려주기 위한 변수 생성
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//   // 정답을 맞히기 전에 게임을 끝내기 위한 장치 생성
//   if (guess === "q") break;

//   attempts++;
//   if (guess > targetNum) {
//     guess = prompt("Too hight! Enter a new guess number!");
//   } else {
//     guess = prompt("Too low! Enter a new guess number!");
//   }
// }

// if (guess === "q") {
//   console.log("OK, YOU QUIT!");
// } else {
//   console.log("CONGRATS YOU WIN!");
//   console.log(`YOU GOT IT! It took you ${attempts} guessess`);
// }

// 개선 사항
// 1. 범위를 입력받고 처음 추측 때 "q"를 입력하면 끝나지 않고 targetNum보다 낮은 값으로 인식함
//    입력받은 q를 parseInt에 의해 정수형으로 받고자 했기 때문
// 2. 유효하지 않은 입력값은 시도횟수로 포함하지 않기

let maximum = parseInt(prompt("Enter the maximum nember!"));

while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess! (Type 'q' to quit)");

let attempts = 1;

// 조건문의 구체적인 명시가 필요했음
while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  guess = parseInt(guess);
  if (guess > targetNum) {
    guess = prompt("Too hight! Enter a new guess number!");
    attempts++;
  } else if (guess < targetNum) {
    guess = prompt("Too low! Enter a new guess number!");
    attempts++;
  } else {
    guess = prompt("Invalid guess. Pease enter a number or 'q' to quit");
  }
}

if (guess === "q") {
  console.log("OK, YOU QUIT!");
} else {
  console.log("CONGRATS YOU WIN!");
  console.log(`YOU GOT IT! It took you ${attempts} guessess`);
}
