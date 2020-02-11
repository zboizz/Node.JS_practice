//CRUD
//create, read, update, delete

var arr = ['A','B','C','D'];

//배열을 출력할때에는 배열명 혹은 대괄호
//대괄호 사이에 넣는 숫자는 배열 중 '숫자'번째 배열을 가져옴
console.log(arr[1]);
console.log(arr[3]);

arr[2] =3;
console.log(arr);
console.log(arr.length);//배열의 길이

arr.push('E');
console.log(arr);
