/**
 * @date 20-12-5
 * @author xuansa
 */
//  console.log("hello world".split(" ")[0].toUpperCase().charAt(0)+"hello world".slice(1))

 function generateHashtag(str) {
    // let arr = [];
    // str
    //     .split(' ')
    //     .forEach(item => {
    //         // console.log(item);
    //         arr.push(item.charAt(0).toUpperCase() + item.slice(1));
    //     })
    //     console.log(arr);
    // return arr.join(' ')
    return str.length > 140 || str === '' ? false: '#' + str.split(' ').map(capitalize).join(' ')
 }
 //map 的 callback 是capitalize
 function capitalize(item) {
    item.charAt(0).toUpperCase() + item.slice(1)
 }
 console.log(generateHashtag('hello world'));