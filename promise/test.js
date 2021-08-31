console.log('global script1')
const promise = new Promise((resolve, reject) => {
  console.log('promise script1');
  setTimeout(() => {
    resolve(new Promise((resolve) => { resolve(3) }));
  }, 1000);
}).then(value => {
  console.log('promise', value);
  return value;
}, error => {
  console.log(error);
}).then(value => {
  console.log(value);
}, error => {
  console.log(error);
}).then(value => {
  console.log(value);
}, error => {
  console.log(error);
})
console.log('global script 2')