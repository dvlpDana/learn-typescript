// 타입 추정 (type assertion)
let str = "이건 문자열 타입이 됩니다.";

let num: number;
num = "str" as any;

//DOM API 조작
// <div id="app"> 콘텐츠가 있습니다. </div>
const divElement = document.querySelector("#app") as HTMLDivElement;
divElement.innerHTML;

// const empty = document.querySelector('#app') as null;
// empty.innerHTML;
