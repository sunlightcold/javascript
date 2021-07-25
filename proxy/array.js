function ProxyArray(...args) {
  return new Proxy(args || [], {
    get(target, propKey, receiver) {
      const len = target.length;
      const prop = +propKey;
      if (Number.isFinite(prop)) {
        return target[prop < 0 && len + prop >= 0 ? len + prop : prop];
      }
      return Reflect.get(target, propKey, receiver);
    },
    set(target, propKey, value, receiver) {
      const len = target.length;
      let prop = +propKey;
      if (Number.isFinite(prop)) {
        prop = prop < 0 && len + prop >= 0 ? len + prop : prop;
      }
      return Reflect.set(target, prop.toString(), value, receiver);
    },
  });
}

const arr = new ProxyArray(1);
arr[1] = 9;

console.log(arr, arr[-1]);