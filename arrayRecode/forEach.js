console.log('-------------- forEach ---------------');

const arr = [1, 2, 3, 4];

const obj = { a: 'aaa' };

arr.forEach(function (item, index, arr) {
  console.log('this', this);
  console.log(item, index, arr);
}, obj);

Array.prototype.myForEach = function (callback) {
  var _arr = this;
  var _len = _arr.length;
  var arg2 = arguments[1] || window;

  for (var index = 0; index < _len; index++) {
    callback.call(arg2, _arr[index], index, _arr);
  }
};

console.log('--------------')
arr.myForEach(function (item, index, arr) {
  console.log('this', this);
  console.log(item, index, arr);
}, obj);
