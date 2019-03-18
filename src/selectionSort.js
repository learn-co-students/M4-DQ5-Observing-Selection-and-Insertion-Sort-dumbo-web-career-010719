function selectionSort(arr) {
  let i,j;
  let n = arr.length; // initialise to a's length

  /* advance the position through the entire array */
  /*   (could do j < n-1 because single element is also min element) */
  for (j = 0; j < n-1; j++)
  {
      /* find the min element in the unsorted a[j .. n-1] */

      /* assume the min is the first element */
      let iMin = j;
      /* test against elements after j to find the smallest */
      for (i = j+1; i < n; i++)
      {
          /* if this element is less, then it is the new minimum */
          if (arr[i] < arr[iMin])
          {
              /* found new minimum; remember its index */
              iMin = i;
          }
      }

      if (iMin != j)
      {
          swap(arr, iMin, j);
      }
  }
}


function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
