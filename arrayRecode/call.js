console.log('--------------- call ----------------');

function A() {
  this.name = 'A';
  this.getName = function () {
    return this.name;
  };
}

function B() {
  this.name = 'B';
  this.getName = function () {
    return this.name;
  };
}

const a = new A();
const b = new B();
console.log(a.getName.call(b));

function getUniqueProp(obj) {
  var key = new Date();
  if (obj.hasOwnProperty(key)) {
    return getUniqueProp(obj);
  } else {
    return key;
  }
}

Function.prototype.myCall = function (context) {
  // context 执行上下文
  // this, 谁调用 myCall 指向谁
  // 调用 myCall ，指向 context
  context = context ? Object(context) : window;

  // 生成唯一属性名
  var _prop = getUniqueProp(context);
  context[_prop] = this;

  var arg = [];

  for (var i = 1; i < arguments.length; i++) {
    arg.push(arguments[i]);
  }
  var ret = context[_prop](...arg);
    
  delete context[_prop];

  return ret;
};


console.log('--------------- myCall ----------------');

console.log(a.getName.myCall(b));

console.log(b);
