/**
 * @author shinobi
 * @date 20-11-20
 */
const numbers = [3,62,234,7,23,74,23,76,92];
const arr = [];
// const largeNumbers = numbers.forEach((e,i)=>{
//     if(e>70){
//         arr.push(e);
//         //push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
//     }
// })

//filter 是在 forEach基础上添加回滚

//filter内置函数
const cb= number => number > 70
//=> 后面省略{return number>70}
 const largeNumbers=numbers.filter(cb);

console.log(largeNumbers);