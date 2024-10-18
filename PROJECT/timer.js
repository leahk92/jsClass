// 변수 설정
let timerInterval;
let totalSeconds = 0;
let remainSeconds = 0;
let isPause = false;

// 버튼 요소 가져오기
const startButton = document.querySelector(".start-btn");
const pauseButton = document.querySelector(".pause-btn");
const resumeButton = document.querySelector(".resume-btn");
const resetButton = document.querySelector(".reset-btn");

// 각 버튼에 이벤트 리스너 추가
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resumeButton.addEventListener("click", resumeTimer);
resetButton.addEventListener("click", resetTimer);

// 타이머 함수
// 입력된 분초를 초단위로 변환
// 1초마다 시간을 감소시키고 화면에 표현 : 00분 00초
function startTimer() {
  const minutes = parseInt(document.querySelector("#minuteInput").value);
  const seconds = parseInt(document.querySelector("#secondInput").value);

  // 유효한 숫자인지 검증
  if (minutes < 0 || seconds < 0 || (minutes === 0 && seconds === 0)) {
    alert("유효한 숫자를 입력하세요. 분과 초는 0보다 커야 합니다");
    return;
  }

  totalSeconds = minutes * 60 + seconds;
  // console.log(typeof totalSeconds);
  remainSeconds = totalSeconds;
  updateDisplay();

  // 타이머 시작
  timerInterval = setInterval(() => {});
}

// 타이머 일시정지 함수
function pauseTimer() {}

// 타이머 재시작 함수
function resumeTimer() {}

// 타이머 리셋 함수
function resetTimer() {}

// 화면시간 업데이트 함수
function updateDisplay() {}

// 종료음 재생 함수
function playEndSound() {
  //   document.querySelector("#endSound").play();
  const endSound = document.querySelector("#endSound");
  endSound.play();
}

/////////////

// 기능 추가
// 시간 추가,감소
// 다중 타이머
