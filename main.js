let answer = generateAnswer(); // 예: [3, 5, 9, 1]
let attempts = 0;

function generateAnswer() {
  let digits = [];

  // 첫 번째 자리는 1~9 중에서 선택 (0 제외)
  let firstDigit = Math.floor(Math.random() * 9) + 1; // 1~9
  digits.push(firstDigit);

  // 나머지 자리는 1~9 중에서 중복 없이 선택 (0 제외)
  while (digits.length < 4) {
    let num = Math.floor(Math.random() * 9) + 1; // 1~9
    if (!digits.includes(num)) {
      digits.push(num);
    }
  }

  return digits;
}

function checkGuess() {
  const input = document.getElementById("guess").value;

  // 입력 유효성 검사
  if (
    input.length !== 4 ||
    !/^[1-9]{4}$/.test(input) || // 1~9만 허용 (0 제외)
    new Set(input).size !== 4 // 중복되지 않는 숫자만 허용
  ) {
    alert("Please enter 4 different digits (1-9), with no duplicate numbers!");
    return;
  }

  let guess = input.split("").map(Number);
  let strike = 0,
    ball = 0;

  for (let i = 0; i < 4; i++) {
    if (guess[i] === answer[i]) strike++;
    else if (answer.includes(guess[i])) ball++;
  }

  attempts++;
  const resultDiv = document.getElementById("result");
  const resultLine = document.createElement("div");
  resultLine.textContent = `${input} → ${strike}S ${ball}B`;
  resultDiv.appendChild(resultLine);

  if (strike === 4) {
    const messages = ["^희망이^", "^용기가^", "^절제가^"];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    alert(`${randomMsg} ${attempts} 시도 끝에 성공하셨습니다.`);

    // 1초 후 새로고침
    setTimeout(() => {
      location.reload();
    }, 1000); // 1000ms = 1초
  }
}
