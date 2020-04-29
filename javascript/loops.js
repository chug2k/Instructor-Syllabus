// ***Iteration!****************************************************************

// ***Anatomy!******************************************************************
// a loop will run until a certain condition becomes false.

for(let currentNum = 0; currentNum < 11; currentNum++) {
  console.log(currentNum);
}

// ***Infinite loops!***********************************************************

for(let i = 1; i > 0; i++) {
  console.log(i);
}

// ***Looping the other direction!**********************************************

for(let i = 10; i >= 0; i--) {
  console.log(i);
}

// ***Looping through arrays!***************************************************

var nums = [3, 7, 23, 5, 18]

for(let i = nums.length - 1; i >= 0; i--) {
  console.log(nums[i] * 4);
}

// ***Filtering an array!*******************************************************

var names = ["Rachael", "Sarah", "Harrison", "Chelsea"]

for(let i = 1; i < names.length; i++) {
  if(names[i].includes("l")) {
    console.log(names[i]);
  }
}
