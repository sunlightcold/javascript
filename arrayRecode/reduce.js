console.log('--------------- reduce ----------------');

const arr = [1, 2, 3, 4];

const obj = { a: 'aaa' };

const initialValue = [5];

const newArr = arr.reduce(function (prev, item, index, arr) {
  prev.push(item);
  return prev;
}, initialValue);

console.log('newArr', newArr);

Array.prototype.myReduce = function (callback, initialValue, arg3 = window) {
  var _arr = this;
  var _len = _arr.length;

  for (let index = 0; index < _len; index++) {
    initialValue = callback.apply(arg3, [initialValue, _arr[index], index, _arr]);
  }

  return initialValue;
};

Array.prototype.myReduceRight = function (callback, initialValue, arg3 = window) {
    var _arr = this;
    var _len = _arr.length;
  
    for (let index = 0; index < _len; index++) {
      initialValue = callback.apply(arg3, [initialValue, _arr[_len - index - 1], index, _arr]);
    }
  
    return initialValue;
};

console.log('----------------- myReduce ------------------');

const initialValue1 = [5];
const initialValue2 = [5];

const newArr2 = arr.myReduce(function (prev, item, index, arr) {
  prev.push(item);
  return prev;
}, initialValue1);

const newArr3 = arr.myReduceRight(function (prev, item, index, arr) {
    prev.push(item);
    return prev;
  }, initialValue2);

console.log('newArr2', newArr2);
console.log('newArr3', newArr3);
