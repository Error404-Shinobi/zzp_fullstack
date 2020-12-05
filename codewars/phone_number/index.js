// const createNumber = (arr) => "(" + arr[0] + arr[1] + arr[2] + ")"
// + arr[3] +arr[4] + arr[5] + "-" + arr[6] + arr[7] + arr[8] + arr[9]
// createNumber([1,2,3,4,5,6,7,8,9,0]);

function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx"; //手机模板
    for (var i = 0; i < numbers.length; i++) {
      format = format.replace('x', numbers[i]);
    }
    return format
  }
  
  
  console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));

// console.log("xxxxxxxxxx".replace(/^123[0-9]{3}-[0-9]{4}$/,'x'))
//replace支持传递正则表达式