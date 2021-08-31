class Promise {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';

  static resolvePromise(promise, x, resolve, reject) {
    if (promise === x) {
      return reject(new TypeError('circular dependency'));
    }

    if (x !== null && typeof x === 'object' || typeof x === 'function') {
      let called = false;
      try {
        const then = x.then;
        if (typeof then === 'function') {
          then.call(x, y => {
            if (called) {
              return;
            }
            called = true;
            Promise.resolvePromise(promise, y, resolve, reject);
          }, r => {
            if (called) {
              return;
            }
            called = true;
            reject(r);
          });
        } else {
          if (called) {
            return;
          }
          called = true;
          resolve(x);
        }
      } catch (error) {
        if (called) {
          return;
        }
        called = true;
        reject(error);
      }

    } else {
      resolve(x);
    }
  }

  state = Promise.PENDING;
  value = undefined;
  reason = undefined;
  onFulfilledCallbacks = [];
  onRejectedCallbacks = [];

  constructor(executor) {
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error); 
    }
  }

  resolve(value) {
    if (value instanceof Promise) {
      return value.then(this.resolve.bind(this), this.reject.bind(this));
    }
    if (this.state === Promise.PENDING) {
      this.state = Promise.FULFILLED;
      this.value = value;
      this.onFulfilledCallbacks.forEach(fn => fn());
    }
  }

  reject(reason) {
    if (this.state === Promise.PENDING) {
      this.state = Promise.REJECTED;
      this.reason = reason;
      this.onRejectedCallbacks.forEach(fn => fn());
    }
  }

  then(onFulFilled, onRejected) {
    onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

    const newPromise = new Promise((resolve, reject) => {
      if (this.state === Promise.FULFILLED) {
        setTimeout(() => {
          try {
            const x = onFulFilled(this.value);
            Promise.resolvePromise(newPromise, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
      
      if (this.state === Promise.REJECTED) {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            Promise.resolvePromise(newPromise, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }    
  
      if (this.state === Promise.PENDING) {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulFilled(this.value);
              Promise.resolvePromise(newPromise, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          })
        });

        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              Promise.resolvePromise(newPromise, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });
      }
    });

    return newPromise;
  }
}

// 测试 promise
Promise.defer = Promise.deferred = function () {
  let dfd = {}
  dfd.promise = new Promise((resolve,reject)=>{
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
}
module.exports = Promise;