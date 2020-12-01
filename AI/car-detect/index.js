/**
 * @date 20-12-1
 * @author xuansa
 */
// console.log('AI来了!')
//node 引入模块的关键字
// 图像识别
const ApiImageClassifyClient = require('baidu-aip-sdk').imageClassify;
// const AipOcrClient = require('baidu-aip-sdk').ocr;
//fs模块是node的内置模块    fileSystem
const fs = require('fs');
// 1.读入文件 I/O 操作 从硬盘读入内存中，
const APP_ID = "23077965";
const APP_KEY = "DUUwuiP55Gq7GADFopv9a34I";
const SECRET_KEY = "llwfjVl4pHLs3ZvTUI75GISlUjsWslHg";

const client = new ApiImageClassifyClient(APP_ID,APP_KEY,SECRET_KEY);
const image = fs.readFileSync("./1.jpg").toString("base64");
client
    .carDetect(image)
    .then(function(result) {
        console.log(result);
    })
    .catch(function(err) {
        console.log(err);
    })
// const client = new AipOcrClient(APP_ID,APP_KEY,SECRET_KEY);
// const options = {};
// options["multi_detect"] = "true";
// const  image = fs.readFileSync("./2.jpg");
// client
//     .licensePlate(image,options)
//     .then(function(result){
//         console.log(result);
//     })
//     .catch(function(err){
//         console.log(err);
//     })



