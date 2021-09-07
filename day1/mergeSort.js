//function to split
function mergeSort(arr) {
  const mid = arr.length / 2;
  if (arr.length <= 1) return arr;

  const left = arr.splice(0, mid);
  const right = arr;
  return merge(mergeSort(left), mergeSort(right));
}

//merge function
function merge(left, right) {
  let sortedArr = [];

  while (left.length && right.length)
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }

  return [...sortedArr, ...left, ...right];
}
module.exports = {
  mergeSort,
  merge,
};
