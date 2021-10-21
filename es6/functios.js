/**
 The below code will create a variable called var redagardless of
 condition.
 BTS happens like the binding declaration will moves to top of the block

 var val;
 if(false){
    val=35;
 }
 console.lg(val);
 
if(false){
   var val=35;
}
console.log(val);

*/
// function myFunc(first, second="b"){
//    console.log(arguments.length);
//    console.log(first===arguments[0]);
//    console.log(second===arguments[1]);

// }
// myFunc("a");

function mul(first=second, second=3){
   return first*second;
}
console.log(mul(2))

// let values = [-25, -50, -75, -100]

// console.log(Math.max(...values,5));  

//Functions with default parameter values

// function add(num1,num2){
//    return num1+num2;
// }
// console.log(add(2));


// function add(num1,num2=3){
//    return num1+num2;
// }
// console.log(add(2));

// function getValue(){
//    let val=5;
//    return val;
// }
// function add(num1,num2=getValue()){
//    return num1+num2;
// }
// console.log(add(2));

//Working with unnamed parameters
//Rest parameters
// function add(...key){
//    let result=0;
//    for(let i=0;i<key.length;i++){
//       result=result+key[i];
//    }
//    console.log(result);
//    console.log(arguments.length);
// }

// add(1,2,3,4,5,5,5,5,5,5,5);

//Increased capabilities of function character

// var add= new Function("...args","return args[0]+args[1]")
// console.log(add(12,12))

//Spread operator

// the spread operator allows you to specify 
// an array that should be split and have its items passed in
//  as separate arguments to a function.

// let values=[52,2,2,2,22];
// console.log(Math.min(...values,1));
// debugger

//es6 name property
// function myFunc() {
   
// }
// var doSomething=function(){

// }
// console.log(myFunc.name)
// console.log(doSomething.name)

//Tail call optimisaton
// function recursive(n){
//    if(n<=1){return 1}
//    else{
//       return n*recursive(n-1)//not optimised
//    }
// }
// console.log(recursive(5));

// function fact(n,p=1){
//    if(n<=1){
//       return 1*p;
//    }
//    else{
//       let result= n*p;
//       return fact(n-1,result);//optimised 
//    }
// }
// console.log(fact(5));
// function Person(name) {
//    this.name = name;
// }

// var person = new Person("Nicholas");
// var notAPerson = Person("Nicholas");

// console.log(person);
// console.log(notAPerson);


// function Person(name){
//    if(new.target == Person){
//       this.name=name;
//    }
//    else{
//       throw new console.error("erroe");
//    }
// } 
   
// var person=new Person("Rupesh");
// console.log(person.name);

// function add(num1,num2){
//    return num1+num2;
// }
// console.log(add(2));
