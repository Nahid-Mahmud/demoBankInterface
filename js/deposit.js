"use strict";
//input-deposit
document
  .querySelector("#submit-deposit-btn")
  .addEventListener("click", function () {
    const deposit = getValuefromUser("input-deposit");
    // console.log("Hello");
    if (deposit >= 0) {
      // deposit set
      let defaultValue = getExistingValue("deposit");
      defaultValue = deposit + defaultValue;
      document.getElementById("deposit").innerText = defaultValue;
      // balance set
      let existingBalance = getExistingValue("balance");
      existingBalance = deposit + existingBalance;
      document.querySelector("#balance").innerText = existingBalance;
    } else if (deposit < 0) {
      alert(`Can't take negative value`);
    }
    // document.getElementById("input-deposit").value = "";
  });
