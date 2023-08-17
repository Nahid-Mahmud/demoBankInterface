"use strict";
// get data from input field

const getValuefromUser = function (inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValue = inputField.value;
  if (inputFieldValue === "") {
    alert("Can't take empty value");
  } else {
    const inputFieldValueConvertedToNumber = Number(inputFieldValue);
    inputField.value = "";
    return inputFieldValueConvertedToNumber;
  }
};

//get value from Alrady existing date

const getExistingValue = function (existingValueId) {
  // console.log(existingValueId);
  const defaultValue = Number(
    document.getElementById(existingValueId).innerText
  );
  return defaultValue;
};

// clear all default values clear-btn

document.querySelector("#clear-btn").addEventListener("click", function () {
  document.getElementById("deposit").innerText = 0;
  document.getElementById("balance").innerText = 1250;
  document.getElementById("withdraw").innerText = 0;
});
