const AipOcrClient = require('baidu-aip-sdk').ocr;
const fs = require('fs');
const APP_ID = "23078077";
const APP_KEY = "V83OVLo8QsPCCijvhr6pnXdI";
const SECRET_KEY = "8VeTsvWOV7ySdeLHg4YW6OudCjnTNGfG";
const client = new AipOcrClient(APP_ID,APP_KEY,SECRET_KEY);
const options = {};
options["multi_detect"] = "true";
const  image = fs.readFileSync("./2.jpg").toString("base64");
client
    .licensePlate(image,options)
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err);
    })