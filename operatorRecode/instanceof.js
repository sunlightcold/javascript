// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上


function Test() {};

const test = new Test();


console.log(test instanceof Test);
console.log([] instanceof Array);
console.log([] instanceof Object);

/**
 * 沿着原型链查找，直到 Object.prototype, 等于 null
 */

function myInstanceof(target, type) {
    type = type.prototype;

    target = target.__proto__;

    while(true) {
        if (target === null) {
            return false;
        }
        if (type === target) {
            return true;
        }
        target = target.__proto__;
    }
}

console.log('---------- 测试 ----------');
console.log(myInstanceof(test, Test));
console.log(myInstanceof([], Array));
console.log(myInstanceof([], Object));
console.log(myInstanceof(Test, Array));