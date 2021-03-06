console.log('--------------- filter ----------------');

const arr = [1, 2, 3, 4];

const obj = { a: 'aaa' };

const newArr = arr.filter(function (item, index, arr) {
  return item > 2;
}, obj);

console.log('newArr', newArr);

Array.prototype.myFilter = function (callback) {
  var _arr = this;
  var _len = _arr.length;
  var _arg2 = arguments[1];
  var _newArr = [];

  for (var index = 0; index < _len; index++) {
    callback.apply(_arg2, [_arr[index], index, _arr]) ? _newArr.push(_arr[index]) : null;
  }

  return _newArr;
};

console.log('----------------- myFilter ------------------');

const newArr1 = arr.myFilter(function (item, index, arr) {
    return item > 3;
}, obj);

console.log('newArr1', newArr1);
