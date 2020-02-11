var fs = require('fs');

//readFileSync

/*
//sync가 있기때문에 동기적으로 처리하는 것
console.log('A');
var result = fs.readFileSync('sample.txt', 'utf8')
console.log(result);
console.log('C');
*/

//sync가 없기때문에 비동기적으로 처리하는 것, callback이 필요함
console.log('A');
fs.readFile('sample.txt','utf8', function(err, result){
    console.log(result);
});

console.log('C');
