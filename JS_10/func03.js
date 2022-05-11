// 함수 선언
// func1 라는 이름으로 함수 선언하기
const func1 = function () {};

// 한 개의 매개변수를 갖는 func2 이름으로 함수 선언하기
const func2 = function (num) {
  console.log(num);
};

// 두 개의 매개변수를 갖는 func3 함수 선언하기
// 이 함수는 return을 수행한다.
const func3 = function (num1, num2) {
  return num1 + num2;
};

const result = func3(100, 200);

/*
"함수 호이스팅"
func4() 함수는 아직 선언문이 발견되지 않았다.
JS는 즉시 실행을 멈추고 이후에 있는 모든 코드를 Scan한다.
마침 다음 라인에서 func4() 함수 선언문을 만났다. 이 순간 JS는 함수 호출코드와 함수 선언 코드를 서로 바꿔치기 한다.
그래고 정상적으로 함수 호출이 이루어져 코드가 잘 작동된다.
*/
func4();
function func4() {
  console.log("나는 func4");
}

/*
JS에서 const로 시작하는 함수 선언
새로운 JS에서는 기존에 function으로 시작하는 함수 대신 변수처럼 const로 시작하는 함수 선언 명령문이 도입되었다.

const로 시작하는 함수는 실행과정에서 호이스팅이 일어나지 않는다.
반드시 함수를 호출하기 전에 선언문이 나타나야 한다.
*/
func5();
const func5 = function () {
  console.log("나는 func5");
};
