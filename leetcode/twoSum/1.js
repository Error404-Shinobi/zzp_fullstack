// console.log('leetcode,必考之two Sum')
//手写代码
/**
 * @author shinobi
 * @date 20-11-20
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//es5语法 使用var
const twoSum =function (nums,target){
    //1.暴力破解
    let arr=[];
    //es6语法
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                arr = [i,j];
            }
        }
    }
    return arr;
}
console.log(twoSum([2,7,11,15],9))