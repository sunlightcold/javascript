/**
 * 归并排序
 */
function mergeSort(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('argument[0] not array');
  }
  const length = arr.length;
  if (length <= 1) {
    return arr;
  }
  const middle = length >> 1;
  const leftArr = arr.splice(0, middle);
  const rightArr = arr.splice(0);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
  const arr = [];
  while(left.length > 0 && right.length >0) {
    if (left[0] < right[0]) {
      arr.push(...left.splice(0, 1));
    } else {
      arr.push(...right.splice(0, 1));
    }
  }
  return arr.concat(left, right);
}

const arr1 = [3, 55, 33, 9, 6, 90, 1, 0, 7];
const arr = mergeSort(arr1)
console.log(arr);
