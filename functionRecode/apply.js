console.log('--------------- apply ----------------');

function A(age) {
  this.name = 'A';
  this.age = age;

  this.getName = function (job) {
    console.log(this, arguments)
    return this.name + this.age + '岁' + ',' + '工作: ' + job;
  };
}

function B(age) {
  this.name = 'B';
  this.age = age;

  this.getName = function (job) {
    return this.name + this.age + '岁' + ',' + '工作: ' + job;
  };
}

const a = new A(12);
const b = new B(20);
console.log(a.getName.apply(b, [1]));

/**
 * apply 特点
 * 1. 第一个参数，this 执行 apply 函数内部的 context
 * 2. 第二个参数，包含多个参数的数组
 * 3. 第二个参数，是原始值，Uncaught TypeError: CreateListFromArrayLike called on non-object
 * 4. 第二个参数, 是 null、undefined 忽略
 */

function getUniqueProp(obj) {
  var key = new Date();
  if (obj.hasOwnProperty(key)) {
    // 递归调用，直到对象上没有 key 这个属性
    return getUniqueProp(obj);
  } else {
    return key;
  }
}

Function.prototype.myApply = function (context, args) {
    context = context ? Object(context) : window;

    // 生成唯一属性名, 谁调用 myApply this 指向谁，把 this 存储到 context
    // 用 context 调用存储的 this，则函数内部 this 指向了 context
    var _prop = getUniqueProp(context);
    context[_prop] = this;

    var _args = [];

    var _typeof = typeof args;

    // 是原始值
    if (_typeof != 'object' && _typeof != 'function' && _typeof != 'undefined') {
        throw new TypeError('Uncaught TypeError: CreateListFromArrayLike called on non-object');
    }

    if (args != undefined && args != 'function') {
        var _toStr = Object.prototype.toString;
        var _objType = _toStr.call(args);
        var _arrType = '[object Array]';
        if (_objType == _arrType) {
            _args = args;
        }
    }

    // var ret = context[_prop](..._args);
    var ret = eval('context[_prop](' + _args + ')');

    delete context[_prop];

    return ret;
};


console.log('--------------- myApply ----------------');

console.log(a.getName.myApply(b, [1, 2, 4, 5, 3]));
