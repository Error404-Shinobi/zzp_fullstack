/**
 * @date 20-12-1
 * @author xuansa
 */
const fs = require('fs');

fs.readFile('./1.jpg',function(err,data) {
    // console.log(err);
    if(err) {
        throw new Error(err)
        return;
    }
    console.log(data)
})