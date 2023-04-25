//ES2015
class Person{
  //클래스 로직
  constructor(name, age) {
    console.log('생성되었습니다.')
    this.name = name;
    this.age = age;
  }
}

const seho = new Person('세호', 30);
console.log(seho)

//Inheritance and the prototype chain
const user = { name: 'capt', age: 100 }
const admin = {}
admin.prototype = user;
admin.role = 'admin';
console.log(admin.name);
console.log(admin.role);
