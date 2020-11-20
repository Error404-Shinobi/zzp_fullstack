/**
 * @author shinobi
 * @date 20-11-20
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 键头函数
const twoSum = (nums,target) => {
    // console.log('两数相加')
    let map = {};//JSON Object HashMap 空间复杂度的花销O(n)
    let res = [];
    //编写功能  一个函数完成 一个功能

    //forEach()用于调用数组的每个元素，并将元素传递给回调函数。
    //forEach()对于空数组不会执行回调函数

    // nums.forEach(function(e,i)  {
    //     console.log(e,i);
    // })   第一种方法

    // nums.forEach((e,i) =>{
    //     console.log(e,i);
    // })   第二种方法

    //es6更简洁
    //forEach 可以实现callback
    //for + 执行功能
    nums.forEach((e,i) => map[e]=i);// O(n) 以空间换时间
    // console.log(map);
    for (let i=0;i<nums.length;i++){    //O(n)
        let j=map[target-nums[i]];//未找到类型为undefined
        if(j && j !==i){
            res = [i,j];
            break;
        }
    }
    return res;
}

console.log(twoSum([2,7,11,15],9));