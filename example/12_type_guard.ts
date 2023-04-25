//타입가드 (type guard)
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: "Tony", age: 33, skill: "Iron Making" };
}

const Tony = introduce();
console.log(Tony.skill);

if ((Tony as Developer).skill) {
  const skill = (Tony as Developer).skill;
  console.log(skill);
} else if ((Tony as Developer).age) {
  const age = (Tony as Developer).age;
  console.log(age);
}

//타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}
if (isDeveloper(Tony)) {
  Tony.skill;
} else {
  Tony.age;
}
