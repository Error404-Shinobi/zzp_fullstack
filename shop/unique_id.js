/**
 * @author xuansa
 * @date 20-11-21
 * 功能：获得唯一ID
 * @return {string}
 */
// const uniqueID = () => {
//     let t= +new Date();//类型转换为number
//     let ranNum= Math.ceil(Math.random()*10000);//产生一个四位的随机数
//     return t + "" +ranNum;
// }
const uniqueID = () => +new Date() + '' + Math.ceil(Math.random()*10000)
console.log(uniqueID());