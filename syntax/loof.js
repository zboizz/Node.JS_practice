console.log('A');
console.log('B');

var i = 0;
while(i < 2){
  console.log('C1');
  console.log('C2');
  console.log(i+1+'번째 실행');
  i = i + 1;
}
//최초 while 안에는 true값이 들어간다.
//i값은 0부터 시작되며 한바퀴 돌때 i값은 1이 더해진다.
//while안에 조건문이 2보다 작다로 적어놨기에 true일때 값이 출력되고
//아닐 시 false가 출력된다.

console.log('D');
