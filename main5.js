let answer5 = generateAnswer(5); // 예: [3, 1, 7, 2, 9]
let attempts5 = 0;

function generateAnswer(digitsCount) {
  let digits = [];

  // 첫 번째 자리는 1~9 중에서 선택 (0 제외)
  let firstDigit = Math.floor(Math.random() * 9) + 1; // 1~9
  digits.push(firstDigit);

  // 나머지 자리는 1~9 중에서 중복 없이 선택 (0 제외)
  while (digits.length < digitsCount) {
    let num = Math.floor(Math.random() * 9) + 1; // 1~9
    if (!digits.includes(num)) {
      digits.push(num);
    }
  }

  return digits;
}

function checkGuess5() {
  const input = document.getElementById("guess5").value;

  // 입력 유효성 검사
  if (
    input.length !== 5 ||
    !/^[1-9]{5}$/.test(input) || // 1~9만 허용 (0 제외)
    new Set(input).size !== 5 // 중복되지 않는 숫자만 허용
  ) {
    alert("Please enter 5 different digits (1-9), with no duplicate numbers!");
    return;
  }

  let guess = input.split("").map(Number);
  let strike = 0,
    ball = 0;

  for (let i = 0; i < 5; i++) {
    if (guess[i] === answer5[i]) strike++;
    else if (answer5.includes(guess[i])) ball++;
  }

  attempts5++;
  const resultDiv = document.getElementById("result5");
  const resultLine = document.createElement("div");
  resultLine.textContent = `${input} → ${strike}S ${ball}B`;
  resultDiv.appendChild(resultLine);

  if (strike === 5) {
    const messages = ["^좋다^", "^싫다^", "^부족하다^"];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    alert(`${randomMsg} ${attempts5} 시도 끝에 성공하셨습니다.`);

    // 1초 후 새로고침
    setTimeout(() => {
      location.reload();
    }, 1000); // 1000ms = 1초
  }
}
