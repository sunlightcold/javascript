console.log('-------------- map ---------------');

const arr = [1, 2, 3, 4];

const obj = { a: 'aaa' };

const newArr = arr.map(function (item, index, arr) {
  return item;
}, obj);

console.log('newArr', newArr);

Array.prototype.myMap = function (callback) {
  var _arr = this;
  var _len = this.length;
  var _arg2 = arguments[1] || window;
  var _newArr = [];

  for (var index = 0; index < _len; index++) {
    _newArr.push(callback.apply(_arg2, [_arr[index], index, _arr]));
  }

  return _newArr;
};

console.log('------------- myMap -----------');
const newArr1 = arr.myMap(function (item, index, arr) {
  return ++item;
}, obj);

console.log('newArr1', newArr1);
