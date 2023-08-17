"use strict";

document
  .querySelector("#submit-withdraw-btn")
  .addEventListener("click", function () {
    const withdrawValueFomUser = getValuefromUser("input-withdraw");
    let getDefaultBalance = getExistingValue("balance");
    // applying nececarry logics
    if (withdrawValueFomUser >= 0) {
      if (withdrawValueFomUser > getDefaultBalance) {
        alert(`Not enough money`);
      } else if (withdrawValueFomUser < getDefaultBalance) {
        let getDefaultWithdrewValue = getExistingValue("withdraw");
        getDefaultWithdrewValue =
          withdrawValueFomUser + getDefaultWithdrewValue;
        document.getElementById("withdraw").innerText = getDefaultWithdrewValue;
        //  setting balnce
        getDefaultBalance = getDefaultBalance - withdrawValueFomUser;
        document.getElementById("balance").innerText = getDefaultBalance;
      }
    } else if (withdrawValueFomUser < 0) {
      alert(`Can't take negative value`);
    }
  });
