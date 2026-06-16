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



function outer() {
    let name = "Kapil";

    function inner() {
        console.log(name);
    }

    inner();
}

outer();



let str = "abcdabcdefggghz";



for(let i = 0 ; i<=str.length; i++){

  

}