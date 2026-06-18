// let key = 2;

// switch (key) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     case 4:
//         console.log("Friday");
//         break;

//     default:
//         console.log("Wrong Input");
//         break;
// }

// let num = 5;
//  let newnum = num++;
// console.log(`before = ${newnum}`);

// newnum = ++num;

// console.log(`after = ${newnum}`);

// let name = " ";

// console.log(name.length);

// // console.log(name[0]);

// // console.log(name[9]);

// let str = "kpppppil";

// if(str.includes('a') && str.length > 3){
//     console.log("a h bhai");
// }else{
//     console.log("bad h ");
// }

// let str = "akapil";

// if(str[0]=='A' || str[0]=='a' &&   str.length > 5  ){
//     console.log("sahi h ");
// }else{
//     console.log("BHAG");
// }

// let str = "apple,banana,mango";
// console.log(str);
// console.log(str.split(","));

// let month =["january", "july", "march", "august"];

// console.log(month.splice(0,2,"july","june"));

// console.log(month)

// let lang = ["c","java","js","html","css"];

//  let newarr = lang.slice(2,1).reverse();
// console.log(newarr)

// let arr = [

//     ['X',' ','O'],
//     [' ',' X','O'],
//     ['o',' ','X']

// ]

// let arr = [2,5,7,8,4];

// let n = 3;

// for(let i = 0; i<n;i++){

//     console.log(arr[i]);
// }

// let arr = [7, 9, 0, -2];
// let n = 3;
// let ans = arr.slice(2);
// console.log(ans);

// let arr = [[1,2,3,4,5],[6,7,8,9,10]];;

// for(let i = 0 ; i<arr.length;i++){

//     for(let j = 0; j<arr[i].length;j++){
// console.log(arr[i][j]);
//     }
// }

// let heroes = [['ironman','superman','thor'],['superman','wonderwomen','flash']];

// for(let list of heroes){
//     for(let hero of list ){
//         console.log(hero)
//     }
// }

// number of digits

// ------------------------------------------------

// let number = 12345;

// let count = 0;

// let copy = number;

// while (copy > 0) {
//   count++;

//   copy = Math.floor(copy / 10);
// }

// console.log(count)

// let num = 12345;
// let sum = 0;
// let digit

// let copy = num ;

// while(copy>0){

//   digit = copy%10;
// sum += digit ;

// // }

// let person ={
//     name:'kapil',
//     age:24,

// marks: {
//     sst : 66,
//     hindi:80,
//     maths :90
// }

// }

// update
// person.marks.sci = "hindi";

// console.log(person)

// let students = [
//     {
//         name: "Kapil",
//         age: 20
//     },
//     {
//         name: "Rahul",
//         age: 21
//     },
//     {
//         name: "Aman",
//         age: 22
//     }
// ];

// console.log(students[0].name);

// function Rolldice() {
//   let num = Math.random() * 6 + 1;

//   let n = Math.floor(num);

//   console.log(n);

// }

// function sum(a,b){

//     return a+b;

// }

// function table(T){

// for(let i = 1; i<=10; i++){

//     console.log(`${T} * ${i} = ${T*i} `);

// }

// }

// table(49);

// function sumOfN(n) {

//   let sum = 0;

//   for (let i = n; i >= 1; i--) {
//     sum = i + sum;
//   }
//   console.log(sum);
// }

// sumOfN(3);

// function joint(F,L){

// console.log(F.concat(" "+ L));

// }

// joint("kapil","patel");

// function outer() {
//     let name = "Kapil";

//     function inner() {
//         console.log(name);
//     }

//     inner();
// }

// outer();

// let str = "abcdabcdefggghz";

// let newstr = "";

// for(let i = 0 ; i<str.length; i++){

//     if(!newstr.includes(str[i])){
//         newstr += str[i];
//     }

// }

// console.log(newstr)

// let countries = ["Australia", "United States of America", "Germany"];

// let count = 0;
// let saveIndex = 0;

// for(let i =0; i< countries.length;i++){

//     if(count <= countries[i].length){

//      count = countries[i].length;

//      saveIndex = countries[i];

//     }

// }

// console.log(count);
// console.log(saveIndex)

// let str = "kapilaie";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   if (
//     str.charAt(i) == "a" ||
//     str.charAt(i) == "e" ||
//     str.charAt(i) == "i" ||
//     str.charAt(i) == "o" ||
//     str.charAt(i) == "u"
//   ) {
//     count++;
//   }
// }

// console.log(count);

// let start = 100;
// let end = 200;

// function generateRandom(start, end) {
//     let diff = end - start;

//     return Math.floor(Math.random() * diff) + start;
// }

// console.log(generateRandom(start, end));

// try {
//     console.log(x);
// } catch (error) {
//     console.log("Inside catch");
// } finally {
//     console.log("Always runs");
// }

//   let hello = setInterval(() => {
//     console.log("hello");
// }, 1000);

// setTimeout(()=>{
// clearInterval(hello);
// console.log("finish ------------------------")
// },5000)

// let hello = setInterval(() => {
//     console.log("hello kapil ji")
// }, 2000);

// setTimeout(()=>{
//      clearInterval(hello);
// },5000);

// let isEven = ((n)=>{
// if(n%2==0){
//     console.log(`${n} is Even number `);
// }else{
//     console.log(`${n} is Odd number `)
// }
// });

// console.log(isEven(115));

// const object = {
//   message: "Hello,World!",
//   logMessage() {
//     console.log(this.message);
//   },
// };

// setTimeout(object.logMessage,1000);



//  let arr = [1,2,3,4,5];

//  let newarr = arr.map((el)=>el*2);




//  let newarr = arr.filter((el)=>el%2==0);
//  console.log(newarr)


//  arr.forEach(el=>{
// console.log(el*2);
// })

// console.log([2,4,6,8].every((el)=>el%2==0));

// console.log([2,3,4,6].some((el)=>el%2==0));

// let arr = [1,2,3,4];

// let finalarr = arr.reduce((acc,el)=>acc+el);

// console.log(finalarr);


// let arr = [1,2,3,4,5,6,7,8,9,10];


// let newarr = arr.reduce((max,el)=>{
//     if(el>max){
// return el;
//     }else{
//         return max;
//     }


// });

// console.log(newarr);





// let a = function (a,b=6){
// return a + b ;
// }

// console.log(a(4));







// function sum(...nums) {
//     return nums.reduce((a, b) => a + b, 0);
// }

// console.log(sum(1, 2, 3, 4));


// let arr =[1,2,3,4];

// let [a,b,c,d] = arr;


// console.log(a,b)

// let arr = [1,2,3,4,5];


// let newarr = arr.map((el)=>el+5);
// console.log(newarr);


