// async await (Node >= 7.6)
var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, { encoding: 'utf-8' }, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

async function run() {
    var song1 = await readFilePromise('./song1.txt');
    var song2 = await readFilePromise('./song2.txt');
    // console.log(song1, song2);
    return [song1, song2];
}

run().then(function(data){
    console.log(data);
})

// Todo 1
var axios = require('axios');

// Giải thích điểm khác nhau giữa 1 và 2:
// 1. Sử dụng vòng lặp for
async function fetchUrls(urls) {
  var results = [];
  for (const url of urls) {
    const res = await axios.get(url);
    results.push(res);
  }
  return results;
}

// 2. Sử dụng array.map
async function fetchUrlsParallel(urls) {
  var results = await Promise.all(
    urls.map(function(url) {
      return axios.get(url);
    })
  );
  return results;
}

// Chạy thử 2 hàm trên với đầu vào dưới đây và so sánh tốc độ
var urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3'
];

fetchUrls(urls).then(() => console.log('Done'));
fetchUrlsParallel(urls).then(() => console.log('Done 2'));