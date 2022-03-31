/**
 const,letの変数宣言
 * 
 */

// var val1 = "var変数";
// val1 = "val変数を上書き";

// console.log(val1);

// // var変数は再宣言可能

// var val1 ="var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);
// val2 = "letを上書き";
// console.log(val2);
// let val2 = "let変数";

// varは再宣言可能 letは不可

// const val3 = "const変数";
// console.log(val3);
// // val3 = "const変数を上書き";

// const val3 = "const変数";

// const val4 = {
// name: "勇飛",
// age: 27,
// };

// val4.name = "ゆうひ";

// console.log(val4);

// val4.address ="Hiroshima";

//constは代入不可
//配列は代入可能

// const val5 = ['dog','cat'];
// console.log(val5);
// val5[0] = "bird";
// val5.push("monkey");

// const name ="勇飛";
// const age =27;

// console.log(`私の名前は${name}です${age}歳です`);

/**
 * アロー関数
 */

//往来の巻数
// function func1(str) {
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です"));

//アロー巻数
// const func2 = (str) => {
//   return str;
// };

// console.log(func2("こんちわ"));

// const func3 = (num1,num2) => num1 + num2;
// console.log(func3(10,20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "じゃけえ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です、
//  年齢は${myProfile.age}です`;
// console.log(message1);

// const { name,age } = myProfile;
// const message2 = `名前は${name}です年齢は${age}歳です`

// const myProfile = ["勇飛", "27"];
// const [name, age] = myProfile;
// const message3 = `名前は${name}です、年齢は${age}です`;
// console.log(message3);

/**
 * デフォルト値、引数
 */

//  const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`)

//  sayHello()

/**
 * スプレッド公文
 */

// const arr1 = [1, 2];
// //  console.log(arr1);
// //  console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 =[1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

/**
 * map filter 配列の処理
 */

//  const nameArr = ["田中","山田","勇飛"];
// //  for(let index = 0; index < nameArr.length; index++){
// //    console.log(nameArr[index]);
// //  }

// //  const nameArr2 = nameArr.map((name) =>{
// //    return name;
// //  })

// // nameArr.map((name)=> console.log(name));

// const newnameArr = nameArr.map((name) => {
//   if(name === "勇飛") {
//     return name
//   } else {
//     return `${name}さん`;
//   }
// })

// console.log(newnameArr);

/***
 * 三項演算子
 */

//  const val1 = 1 > 0 ? 'trueです' : 'falseです';
//  console.log(val1);

// const num = "1300"

// const formattedNum = typeof num === 'number' ? num.toLocaleString(): '数値を入力してください';

// console.log(formattedNum);

//

/**
 * 論理演算子の本当の意味をしろう
 */
