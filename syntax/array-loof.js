var number = [1,400,12,34,5,10000];

var i =0;
var total = 0;

//i의 범위를 적으면 범위 내 혹은 범위 밖의 값은
//출력되지 않지만 length를 통해서 동적으로 출력이 가능해진다.
while(i < number.length){
  total = total + number[i];
  //console.log(number[i]);
  i = i+1;
}
console.log(`total: ${total}`);
