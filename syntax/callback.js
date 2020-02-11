/*
fuction a(){
  console.log('A');
}
*/


var a =function(){//익명함수
  console.log('A');
}
//a();

function slowfunc(callback) {
  callback();
}

slowfunc(a);
//A가 출력된다.
