console.log('--------------- some ----------------');

const arr = [1, 2, 3, 4];

const obj = { a: 'aaa' };

const flag = arr.some(function (item, index, arr) {
  return item > 2;
}, obj);

console.log('flag', flag);

Array.prototype.mySome = function (callback, arg2 = window) {
  var _arr = this;
  var _len = _arr.length;
  var _res = false;

  for (let index = 0; index < _len; index++) {
    if (callback.apply(arg2, [_arr[index], index, _arr])) {
      _res = true;
      break;
    }
  }

  return _res;
};

console.log('----------------- mySome ------------------');

const flag1 = arr.mySome(function (item, index, arr) {
  return item > 5;
}, obj);

console.log('flag1', flag1);
