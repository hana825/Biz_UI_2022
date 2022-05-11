const num1 = 100;
const num2 = 200;
const num3 = 300;
const sum = num1 + num2 + num3;
console.log("결과:", sum);

function add(num1, num2) {
  console.log("add 함수 결과:", num1 + num2);
}

add(100, 200);
// res 매개변수를 포함하는 view() 함수 선언하기
function view(res) {
  console.log(res.text);
}
// data 객체를 선언하고
// text와 html field 변수를 추가하고
// text에 "Korea", html에 "<p>Korea</p>" 문자열을 저장하라
const data = { text: "Korea", html: "<p>Korea</p>" };
view(data);

// JS에서 빈(blank) 객체 선언하기
const vo1 = {};
// 빈(blank) vo1 객체에 변수 추가하기(추가하면서 초기화를 같이)
// JS에서는 객체에 변수를 추가할 때 별도로 클래스 등을 선언할 필요가 없다.
vo1.text = "Korea";
vo1.name = "홍길동";
vo1.age = 30;
vo1.tel = "010-111-1111";
console.log(vo1);

function myfunc(result) {
  console.log(result);
  console.log(result.name);
  console.log(result.age);
}
myfunc(vo1);
