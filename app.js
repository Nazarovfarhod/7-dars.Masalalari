// MASALALAR

// 1-masala

// function getInitialOdds(n) {
//   let oddNumbers = [];
//   let k = 1;

//   for (let i = 1; i <= n; i++) {
//     if (i == 1) {
//       oddNumbers.push(i);
//     } else {
//       oddNumbers.push((k += 2));
//     }
//   }

//   return oddNumbers;
// }

// const result = getInitialOdds(5);

// console.log(result);

// 2-masala

// let array = [4, 5, 7, 8, 6, 9];
// let newArr = [];

// function getEvenReverse(arr) {
//   arr.forEach((element) => {
//     if (element % 2 == 0) {
//       newArr.unshift(element);
//     }
//   });
//   return newArr;
// }

// console.log(getEvenReverse(array));

// 3-masala

// let array = [4, 5, 7, 8, 6, 9];
// let newArr = [];

// function mostArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i], arr[arr.length - 1 - i]);
//   }
//   console.log(newArr);
// }
// mostArr(array);

// 4-masala

// let arr = [1, 6, 9, 5, 8, 10, 15];
// let sum = 0;

// function rangeSum(arr, K, L) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i >= K && i <= L) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(rangeSum(arr, 2, 5));

// 5-masala

// let newArr = [];

// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];

// function getSingleArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (!newArr.includes(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(getSingleArr(arr));

// 6-masala

// let arr = [7, 4, 9, 2, 3, 1, 5];
// let min = arr[0];
// let max = arr[0];
// let m;
// let k;
// function maxMinArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//       k = i;
//     } else if (max < arr[i]) {
//       max = arr[i];
//       m = i;
//     }
//   }
//   console.log(`max: ${max}, min:${min}`);
//   arr[k] = max;
//   arr[m] = min;
//   return arr;
// }

// console.log(maxMinArr(arr));

// 7-masala

// let arr = [1, 5, 8, 9, 10];
// let newArr = [];

// function changePosition(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i == arr.length - 1) {
//       newArr.push(arr[0]);
//     } else {
//       newArr.push(arr[i + 1]);
//     }
//   }
//   return newArr;
// }

// console.log(changePosition(arr));
