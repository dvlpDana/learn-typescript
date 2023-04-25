function logMessage(value: string) {
  console.log(value);
}
function logMessage(value: number) {
  console.log(value);
}
function logMessage(value: any) {
  console.log(value);
}

// # Union 타입 문법 - `any` 보다는 명시적임
function logMessage(value: string | number) {
  console.log(value);
}

function logMessage(value: string | number) {
  if (typeof value === 'string') {
    value.toLocaleUpperCase();
  }
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  throw new TypeError('value must be string or number')
}

// # Intersection 타입 문법
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.name; // O
  someone.age; // X
}

askSomeone({ name: 'John', age: '100' }) //Person의 interface에 맞는 값 넣기
askSomeone({ name: '준호', skill: '웹개발' }) //Developer의 interface에 맞는 값 넣기

function askSomeone2(someone: Developer & Person) {
  someone.name; // O
  someone.skill // O
  someone.age; // O
}

askSomeone2({ name: 'John', age: '100' }) //skill이 없으면 에러 생김