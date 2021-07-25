const val1 = '5465798765123123123465465123165465123132156465';
const val2 = '123456789794513013132165497968794561321234655454657987987897575753735';

function bigIntAdd(num1, num2) {
  const maxLen = Math.max(num1.length, num2.length);
  num1 = num1.padStart(maxLen, '0');
  num2 = num2.padStart(maxLen, '0');

  let carry = 0;
  let result = '';

  for (let i = maxLen - 1; i >= 0; i--) {
    const sum = (+num1[i] + +num2[i] + carry).toString();
    result = (sum[1] || sum[0]) + result;
    carry = +sum > 9 ? 1 : 0;
  }
  
  if (carry) {
    result = '1' + result;
  }
  return result;
}

const sum = bigIntAdd(val1, val2);

console.log(sum);
