"use strict";

// default id  deposit withdraw balance
// input field input-deposit  input-withdraw
// buttons  submit-deposit-btn submit-withdraw-btn

// Deposit button functionality

document
  .getElementById("submit-deposit-btn")
  .addEventListener("click", function () {
    // deposit value set
    let defaultDepositValue = Number(
      document.getElementById("deposit").innerText
    );
    const userInputDepositValue = Number(
      document.getElementById("input-deposit").value
    );
    defaultDepositValue = userInputDepositValue + defaultDepositValue;
    document.getElementById("deposit").innerText = defaultDepositValue;
    // balance set after deposit

    let defaultBalanceValue = Number(
      document.getElementById("balance").innerText
    );
    defaultBalanceValue = defaultBalanceValue + defaultDepositValue;
    document.getElementById("balance").innerText = defaultBalanceValue;
    // clear input field
    document.getElementById("input-deposit").value = "";
  });

// default id  deposit withdraw balance
// input field input-deposit  input-withdraw
// buttons  submit-deposit-btn submit-withdraw-btn

// withdraw button functionality

document
  .getElementById("submit-withdraw-btn")
  .addEventListener("click", function () {
    // Withdraw change
    // console.log("object");
    let defaultWithdrawValue = Number(
      document.getElementById("withdraw").innerText
    );
    //   console.log(defaultWithdrawValue);
    const userInputWithdraw = Number(
      document.getElementById("input-withdraw").value
    );
    defaultWithdrawValue = defaultWithdrawValue + userInputWithdraw;
    document.getElementById("withdraw").innerText = defaultWithdrawValue;
    // balance set after withdraw

    let defaultBalanceValue = Number(
      document.getElementById("balance").innerText
    );
    if (defaultBalanceValue < userInputWithdraw) {
      alert("Enter amout Lower Than Or Equalto Your Blance");
    } else {
      defaultBalanceValue = defaultBalanceValue - userInputWithdraw;
      document.getElementById("balance").innerText = defaultBalanceValue;
    }

    // clear input Field clear-btn
    document.getElementById("input-withdraw").value = "";
  });

// clear all default values clear-btn

document.querySelector("#clear-btn").addEventListener("click", function () {
  document.getElementById("deposit").innerText = 0;
  document.getElementById("balance").innerText = 0;
  document.getElementById("withdraw").innerText = 0;
});
