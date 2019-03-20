function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  let minIdx, temp,
     len = arr.length;
 for(let i = 0; i < len; i++){
   minIdx = i;
   for(let  j = i+1; j<len; j++){
      if(arr[j]<arr[minIdx]){
         minIdx = j;
      }
   }
   temp = arr[i];
   arr[i] = arr[minIdx];
   arr[minIdx] = temp;
 }
 return arr;
}
