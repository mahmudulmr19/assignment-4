//description: You need to multiply that number by 3, then add 10,
// then divide by 2, then subtract 5, and return the output.

function mindGame(number) {
  let result = (number * 3 + 10) / 2 - 5;

  if (typeof number === "number") {
    return result;
  } else if (typeof number !== "number") {
    return "input should be a number";
  }
}

// description:
// The output should be given based on the total number of characters
// in the String.The output will be 'even' or 'odd'.Sample Input & Output:

function evenOdd(checkEvenOdd) {
  let stringLength = checkEvenOdd.length;
  if (typeof checkEvenOdd !== "string") {
    return "input should be a string";
  } else if (stringLength % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

//description
// The best input value and 7 must be extracted separately.If this difference
// is smaller than 7, the subtraction must be returned.Otherwise double the
// input must be returned.The number you take as input is Gurgurgun.

function isLGSeven(num) {
  let isLGSevenResult = num - 7;
  if (typeof num !== "number") {
    return "input should be a number";
  } else if (isLGSevenResult < 7) {
    return isLGSevenResult;
  } else {
    return (num *= 2);
  }
}

//description:
// Find how many bad data are in the array and return that number.

function findingBadData(numberArray) {
  let arrayBox = [];
  if (Array.isArray(numberArray) === false) {
    return "input should be an array";
  }
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] < 0) {
      arrayBox.push(numberArray[i]);
    }
  }
  return arrayBox.length;
}

// description: You have to figure out how many diamonds you
// will get in total by combining the gems of all friends.If
// the number of total diamond is over 1000, then you will get
// as many diamonds as are left by subtracting 2000 from
// the total diamond.

function gemsToDiamond(friendOneGem, friendTwoGem, friendThreeGem) {
  let friendOneTotalDiamond = friendOneGem * 21;
  let friendTwoTotalDiamond = friendTwoGem * 32;
  let friendThreeTotalDiamond = friendThreeGem * 43;
  let totalNumberOfDiamond =
    friendOneTotalDiamond + friendTwoTotalDiamond + friendThreeTotalDiamond;

  if (totalNumberOfDiamond > 1000 * 2) {
    let diamondWeGet = totalNumberOfDiamond - 2000;
    return diamondWeGet;
  } else {
    return totalNumberOfDiamond;
  }
}
