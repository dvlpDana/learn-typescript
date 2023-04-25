//인터페이스
interface Developer2 {
  name: string;
  skill: string;
}

interface Person2 {
  name: string;
}

let developer2: Developer2;
let person2: Person2;

//타입 호환 : 구조적으로 더 큰 interface의 type은 더 작은 type을 지원할 수 없음
developer2 = person2
//person2 = developer2;

//함수
let add = function (a: number) {
  // ...
}
let sum = function (a: number, b: number) {
  // ...
}

sum = add;
add = sum;

//제네릭
interface Empty<T> {
  //...
}
let empty1: Empty<string>;
let empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}

let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;

notempty1 = notempty2;
notempty2 = notempty1;