function deepClone(origin, hashMap = new WeakMap()) {
  if (origin == undefined || typeof origin !== 'object') {
    return origin;
  }

  if (origin instanceof RegExp) {
    return new RegExp(origin);
  }

  if (origin instanceof Date) {
    return new Date(origin);
  }

  const hashKey = hashMap.get(origin);
  if (hashKey) {
    return hashKey;
  }

  const target = new origin.constructor();
  hashMap.set(origin, target);

  for (const key in origin) {
    if (Object.prototype.hasOwnProperty.call(origin, key)) {
      target[key] = deepClone(origin[key], hashMap);
    }
  }

  return target;
}

function deepClone2(origin, target) {
  if (origin == undefined || typeof origin !== 'object') {
    return origin;
  }

  if (origin instanceof RegExp) {
    return new RegExp(origin);
  }

  if (origin instanceof Date) {
    return new Date(origin);
  }

  const toStr = Object.prototype.toString;
  const arrType = '[object Array]';

  let tar = target || toStr.call(origin) === arrType ? [] : {};

  for (const key in origin) {
    if (Object.hasOwnProperty.call(origin, key)) {
      tar[key] = deepClone2(origin[key], tar[key]);
    }
  }

  return tar;
}

const obj = [
  1,
  2,
  3,
  {
    a: 'a',
    b: 'c',
    c: 'c',
    d: [
      1,
      2,
      3,
      4,
      {
        a: 'c',
        b: 'b',
        c: 'c',
      },
    ],
  },
];

const newObj = deepClone2(obj);
console.log(obj);
newObj[3].d[4].a = '777';
console.log(newObj);

// 循环依赖
const obj1 = {};
const obj2 = {};
obj1.obj2 = obj2;
obj2.obj1 = obj1;
const obj3 = deepClone(obj1);
console.log(obj3);
