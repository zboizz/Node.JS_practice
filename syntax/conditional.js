var args = process.argv; //두 개의 값 전부 저장
var arg = process.argv.slice(1); //두개의 값중 (1)번만 저장
//0번째는 node의 위치
//1번째는 파일의 위치
//3~번째부터는 입력한 값
//node conditional.js 1 2
//'C:\\Program Files\\nodejs\\node.exe',
//'C:\\nodejs\\syntax\\conditional.js',
//'1'
console.log(arg);
console.log(args);
console.log(args[2]);

console.log('A');
console.log('B');

if(args[2] ==='1'){
console.log('c1');
}else{
  console.log('c2');
}
console.log('D');
