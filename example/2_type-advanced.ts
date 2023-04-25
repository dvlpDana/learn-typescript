// 이넘(Enum) - 숫자형
enum Avengers {
  Capt, //0
  Ironman, //1
  Hulk, //2
}
const myHero = Avengers.Capt; //0

//이넘(Enum) - 문자형
enum Shoes {
  Nike = "나이키",
  Adidas = '아디다스'
}

const shoes = Shoes.Nike; // '나이키'

enum Answer{
  Yes = 'Y',
  No = 'N'
}

function askQuestion(answer: Answer): void {
  if (answer === Answer.Yes) {
    console.log('정답입니다')
  } else if (answer === Answer.No) { 
    console.log('오답입니다')
  }
}

askQuestion(Answer.Yes)
// askQuestion('예스')
// askQuestion('y')
// askQuestion('Yes')

// any
let a: any = 'hi';
a = 20;
a = false;

// void
function sayHi(): void {
  // return 'a';
}

