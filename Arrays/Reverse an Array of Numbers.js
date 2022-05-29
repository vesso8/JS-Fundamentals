function positiveSum(arr) {
    var sumPositives = 0;
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] > 0) {
       sumPositives += arr[i];
     }
    }
   return sumPositives;
}
console.log(positiveSum([1, -4, 7, 12]));