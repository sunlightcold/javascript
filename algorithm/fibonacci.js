/**
 * fibonacciSequence
 * 斐波那契数列
 */


/**
 * 递归版
 */
function fibRecursion(n) {
  if (n < 0) {
    throw(`n not < 0`);
  }
  if (n < 2) {
    return n;
  }
  return fibonacciSequence(n - 2) + fibonacciSequence(n - 1);
}

/**
 * 去除重复计算
 * 递归版
 */
function fibRecursionOptimize(n) {
  if (n < 0) {
    throw(`n not < 0`);
  }
  if (n < 2) {
    return n;
  }
  const _fib = (n, f0, f1) => {
    if (n === 0) {
      return f0 + f1;
    }
    return _fib(n - 1, f1, f0 + f1);
  };
  return _fib(n - 2, 0, 1);
}

/**
 * for 循环版
 */
function fibFor(n) {
  if (n < 0) {
    throw(`n not < 0`);
  }
  if (n < 2) {
    return n;
  }

  let result = 0;
  let f0 = 0, f1 = 1;
  for (let i = 2; i <= n; i++) {
    result = f0 + f1;
    f0 = f1;
    f1 = result;
  }
  return result;
}

console.log(fibRecursionOptimize(0));
console.log(fibRecursionOptimize(1));
console.log(fibRecursionOptimize(2));
console.log(fibRecursionOptimize(3));
console.log(fibRecursionOptimize(4));
console.log(fibRecursionOptimize(5));
console.log(fibRecursionOptimize(50));
