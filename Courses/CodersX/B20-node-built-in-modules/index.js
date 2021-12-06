// Node built-in modules
var fs = require('fs');

var text = fs.readFileSync('D:/Projects/MyProgramLanguage/Courses/CodersX/B20-node-built-in-modules/song.txt', { encoding: 'utf8'});

console.log(text);

fs.writeFileSync('D:/Projects/MyProgramLanguage/Courses/CodersX/B20-node-built-in-modules/song-1.txt', 'I\'m LKD');

var path = require('path');

console.log(path.extname('D:/Projects/MyProgramLanguage/Courses/CodersX/B20-node-built-in-modules/song.txt'));