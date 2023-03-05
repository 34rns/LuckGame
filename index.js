(() => {
  const formElm = document.querySelector("form");
  const inputScore = document.getElementById("inp");
  const p1Btn = document.getElementById("pl1Btn");
  const p2Btn = document.getElementById("pl2Btn");
  const resBtn = document.getElementById("resetBtn");
  const subBtn = document.getElementById("submitBtn");
  const p1Score = document.getElementById("player1Score");
  const p2Score = document.getElementById("player2Score");
  const wScore = document.getElementById("winScore");
  const playerOne = document.getElementById("player1Name");
  const playerTwo = document.getElementById("player2Name");
  let isValid = false;
  let p1 = 0;
  let p2 = 0;
  let p1Turn = true;
  let p2Turn = false;
  let winScore = 2;
  let isWin = false;
  let forGenerateNum = 0;
  // __________________ All functions __________________

  function validatingInput(inpValue) {
    //   validation check
    if (!inpValue) {
      wScore.textContent = "No Value Given";
      wScore.style.color = "red";
      inpValue = "";
      isValid = true;
    } else if (inpValue !== inpValue) {
      wScore.textContent = "Not a Valid Value Given";
      wScore.style.color = "red";
      inpValue = "";
      isValid = true;
    } else {
      wScore.textContent = inpValue;
      wScore.style.color = "black";
      inpValue = "";
    }
    return isValid;
  }

  function disableFunc() {
    p1Btn.removeAttribute("disabled", "disabled");
    p2Btn.removeAttribute("disabled", "disabled");
  }
  function enableBtn() {
    p1Btn.setAttribute("disabled", "disabled");
    p2Btn.setAttribute("disabled", "disabled");
  }

  function settingInitialValue() {
    wScore.textContent = winScore;
    p1Score.textContent = p1;
    p2Score.textContent = p2;
  }
  settingInitialValue();
  //_______________ event listeners _____________

  formElm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inpValue = Number(inputScore.value);

    //   validation check
    validatingInput(inpValue);
    if (isValid) {
      console.log("error");
      return;
    }
    inpValue.textContent = "";

    winScore = inpValue;
    return (forGenerateNum = inpValue);
  });

  // player score Handling
  p1Btn.addEventListener("click", (e) => {
    if (p1Turn && !isWin) {
      p1 = Math.floor(Math.random() * forGenerateNum) + 1;
      p1Score.textContent = p1;
    }

    //   setting p1Turn false
    p1Turn = false;
    p1Btn.setAttribute("disabled", "disabled");
    p2Turn = true;
    p2Btn.removeAttribute("disabled");

    if (p1 === winScore) {
      isWin = true;
      playerOne.classList.add("winner");
      playerTwo.classList.remove("winner");
      disableFunc();
    }
  });
  p2Btn.addEventListener("click", (e) => {
    if (p2Turn && !isWin) {
      p2 = Math.floor(Math.random() * forGenerateNum) + 1;
      p2Score.textContent = p2;
    }

    //   setting p2Turn false
    p2Turn = false;
    p2Btn.setAttribute("disabled", "disabled");
    p1Turn = true;
    p1Btn.removeAttribute("disabled");

    if (p2 === winScore) {
      isWin = true;
      playerTwo.classList.add("winner");
      playerOne.classList.remove("winner");
      disableFunc();
    }
  });

  resBtn.addEventListener("click", (e) => {
    isValid = false;
    p1 = 0;
    p2 = 0;
    p1Turn = true;
    p2Turn = false;
    winScore = 2;
    isWin = false;
    settingInitialValue();
    playerOne.classList.remove("winner");
    playerTwo.classList.remove("winner");
    inpValue.textContent = "";
    enableBtn();
  });
})();
