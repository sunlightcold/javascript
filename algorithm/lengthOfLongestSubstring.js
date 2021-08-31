/**
 * 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */
function lengthOfLongestSubstring(str) {
  let max = 0;
  const hashMap = new Map();
  let i = -1;

  for (let j = 0; j < str.length; j++) {
    const s = str[j];
    if (hashMap.has(s)) {
      i = Math.max(hashMap.get(s), i);
    }
    hashMap.set(s, j);
    max = Math.max(max, j - i);
  }

  return max;
}

function lengthOfLongestSubstringSet() {
  let max = 0;
  const hashSet = new Set();

  for (let i = 0, j = 0; i < str.length; i++) {
    const s = str[i];
    while(hashSet.has(s)) {
      hashSet.delete(str[j++]);
    }
    hashSet.add(s);
    max = Math.max(hashSet.size, max);
  }

  return max;
}

const maxSubstr = lengthOfLongestSubstring('abcabcd');
console.log(maxSubstr);
