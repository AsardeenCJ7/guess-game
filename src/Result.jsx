import React, { useState } from "react";

function Result({ secretNum, term }) {
  let result;

  if (term) {
    if (term > secretNum) {
      result = "Higher";
    } else if (term < secretNum) {
      result = "Lower";
    } else if (term == secretNum) {
      result = "Yipee! Correct";
    } else {
      result = "Enter Valid Number";
    }
  }
  return <h4>Your Guessed is : {result}</h4>;
}

export default Result;
