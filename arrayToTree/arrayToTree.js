const input = [
  {
      id: 1,
      val: "学校",
      parentId: null,
  },
  {
    id: 3,
    val: "班级2",
    parentId: 1,
  },
  {
      id: 8,
      val: "班级1",
      parentId: 7,
  },
  {
      id: 9,
      val: "班级2",
      parentId: 7,
  },
  {
      id: 10,
      val: "学生1",
      parentId: 8,
  },
  {
      id: 2,
      val: "班级1",
      parentId: 1,
  },
  {
      id: 4,
      val: "学生1",
      parentId: 2,
  },
  {
    id: 6,
    val: "学生3",
    parentId: 3,
  },
  {
      id: 12,
      val: "学生3",
      parentId: 8,
  },
  {
      id: 5,
      val: "学生2",
      parentId: 3,
  },
  {
      id: 7,
      val: "学校2",
      parentId: null,
  },
  {
      id: 11,
      val: "学生2",
      parentId: 9,
  },
];


/**
 * 数组转树
 * @param 数组
 * @param key
 * @param parentKey
 * @param 父节点值
 */
function arrayToTree(arr, key, parentKey, parentValue) {
  const cacheObj = {};
  let root = [];

  if (Array.isArray(arr)) {
    arr.forEach(item => {
      if (cacheObj.hasOwnProperty(item[parentKey])) {
        cacheObj[item[parentKey]].push(item);
      } else {
        cacheObj[item[parentKey]] = [item];
      }
    });
  }
  arr.forEach(item => {
    if (item[parentKey] === parentValue) {
      root.push(item);
    }
    item.children = cacheObj[item[key]];
  });
  
  return root;
}

const tree = arrayToTree(input, 'id', 'parentId', null);

console.log(tree);
