let array = [17, 12, 54, 90, 10, 2, 25, 93, 83, 15];
let max=array[0];
let min = array[0];


// for (let index = 0; index < array.length; index++) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > array[i + 1]) {
//       temp = array[i + 1];
//       array[i + 1] = array[i];
//       array[i] = temp;
//     }
//   }
// }
// max = array[array.length - 1];
// min = array[0];

for (let i = 0; i < 9; i++) {
    
  if (min > array[i + 1]) {
    min = array[i+1];
  }  
  if(max < array[i + 1])
  {
    max = array[i + 1];
  }

}
console.log(max); // 93
console.log(min ); // 2