var faker = require('faker');
var bytes = require('utf8-length');
var fs = require('fs');

function createFile(data, size) {
  fs.writeFile('data_' + size + '.json', JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
  });
}

function generateData(sizeData, input) {
  var data = faker.random.alphaNumeric(sizeData - 2);
  var sizeJson = bytes(JSON.stringify(data))
  console.log(sizeJson);
  createFile(data, input);

  // while (true) {
  //   if (sizeData <= 10240) {
  //     for (var i = 0; i < sizeData; i++) {
  //       data = data + faker.random.alphaNumeric();
  //     }
  //     createFile(data, input);
  //     return false;
  //   } else {

  //   }
  //   if (sizeData > 10240 && sizeData <= 102400) {
  //     var div = Math.floor(sizeData / 10240);
  //     data = data.repeat(div);
  //     var remainder = sizeData % 10240;
  //     for (var i = 0; i < remainder; i++) {
  //       data = data + faker.random.alphaNumeric();
  //     }
  //   }
  //   if (sizeData > 102400 && sizeData <= 1048576) {
  //     console.log(3);
  //     var div = Math.floor(sizeData / 102400);
  //     data = data.repeat(div);
  //     var remainder = sizeData % 102400;
  //     console.log('remainder ', remainder);
  //     for (var i = 0; i < remainder; i++) {
  //       data = data + faker.random.alphaNumeric();
  //     }
  //   }
  //   if (sizeJson >= 1048576 && sizeJson < 10485760) {
  //     var div = Math.floor(sizeData / 1048576);
  //     data = data.repeat(div);
  //     var remainder = sizeData % 1048576;
  //     for (var i = 0; i < remainder; i++) {
  //       data = data + randomAlpha;
  //     }
  //   }

  //   var sizeJson = bytes(JSON.stringify(data))
  //   console.log(sizeJson);

  //   if (parseInt(sizeJson) === sizeData) {
  //     createFile(data, input);
  //     return false;
  //   }
  // }
}

// generateData();

// function bytesToSize(bytes) {
//   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
//   if (bytes == 0) return '0 Byte';
//   var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
//   return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
// }

function sizeToBytes(x) {
  let last2 = x.slice(-2);
  let result = 0
  size = x.slice(0, -2);
  size = parseInt(size);
  switch (last2) {
    case "KB":
      result = size * 1024;
      break;
    case "MB":
      result = size * 1024 * 1024;
      break;
    case "GB":
      result = size * 1024 * 1024 * 1024;
      break;
    case "TB":
      result = size * 1024 * 1024 * 1024 * 1024;
      break;
    default:
      console.log('Input sai');
      break
  }
  return result;
}


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Input size for generating data: KB, MB, GB, TB?: ', size => {
  var result = sizeToBytes(size);
  generateData(result, size)
  readline.close();
});