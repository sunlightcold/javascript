console.log('--------------- every ----------------');

const arr = [1, 2, 3, 4];

const obj = { a: 'aaa' };

const flag = arr.every(function (item, index, arr) {
  return item < 5;
}, obj);

console.log('flag', flag);

Array.prototype.myEvery = function (callback, arg2 = window) {
  var _arr = this;
  var _len = _arr.length;
  var _res = true;

  for (let index = 0; index < _len; index++) {
    if (!callback.apply(arg2, [_arr[index], index, _arr])) {
      _res = false;
      break;
    }
  }

  return _res;
};

console.log('----------------- myEvery ------------------');

const flag1 = arr.myEvery(function (item, index, arr) {
  return item < 5;
}, obj);

console.log('flag1', flag1);
