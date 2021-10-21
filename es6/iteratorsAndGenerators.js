/**
 * iterator object have a next() method tat returns a result object 
 * the result object have two properties value and done
 * value passes the value whenever next() calls
 * done passes a boolen ->if reaches end then returns true and value as undefined
 */

// var iterator = createIterator([1,2,3]);

// function createIterator(items){
//     var i=0;
//     return {
//         next: function(){
//             var done=(i<=items.length);
//             var value=done?items[i++]:undefined;
//             return{
//                 value:value,
//                 done:done
//             }

//         }
//     }
// }
// console.log(iterator.next());         
// console.log(iterator.next());       
// console.log(iterator.next());        
// console.log(iterator.next()); 
//As this example shows, writing iterators that behave according to the rules laid out in ECMAScript 6 is a bit complex.

//Fortunately, ECMAScript 6 also provides generators, which make creating iterator objects much simpler.



// function *createIterator(){
//     yield "ruosh";
//     yield 2;
//     yield 3;

// }
// var iterator1=createIterator();
// console.log(iterator1.next().value);     // 1
// console.log(iterator1.next().value);     // 2
// console.log(iterator1.next().value);

//After yield 1 executes it stops the fucntion untill next() is encountered
//using yield in anyother place returns error


//Generator Function Expressions

// let createIterator1=function *(items){
//     for(let i=0;i<items.length;i++){
//         yield items[i]
//     }
// }

// var it2=createIterator1(["R","U"]);
// console.log(it2.next().value)

//Generators object methods
// var myObj={
//     *createIterator(items){
//         for(let i=0;i<items.length;i++){
//             yield items[i];
//         }
//     }
// }

// let temp=myObj.createIterator([1,2,3]);
// console.log(temp.next().value)
// console.log(temp.next().value)

// //for-of loop

// let val=[1,2,3,4];
// for(let num of val){
//     console.log(num)
// }

// //Accessing the default iterables

// let iterator=val[Symbol.iterator](); //[symbol.iterator is adefault iterator]

// console.log(iterator.next().value)
// //We can check objexts are iterable or not with[Symbol.iterator]

// //creating iterables

// let collection={
//     items:[],
//     *[Symbol.iterator](){
//         for(let item of this.items){
//             yield item;
//         }
//     }
// }
// collection.items.push(1);
// collection.items.push(2);
// collection.items.push(3);
// console.log(collection.items);
// for(let val of collection){
//     console.log(val)  //it wont works if iterator is not there in objects
// }
//Builti-in-iterators
//Collection itertors-there are built in iterators for all collection objects
/**
 * entries()
 * values()
 * keys()
 */

let array=["first","second","third"];
let set=new Set(["first","second","third"]);
let map=new Map([["name","Rupesh"],["age",23]]);

// for(let i of array.entries()){
//     console.log(i)
// }
// for(let i of set.entries()){
//     console.log(i)
// }
// for(let i of map.entries()){
//     console.log(i)
// }
// for(let i of array.values()){
//     console.log(i)
// }
// for(let i of set.values()){
//     console.log(i)
// }
// for(let i of map.values()){
//     console.log(i)
// }
// for(let i of array.keys()){
//     console.log(i)
// }
// for(let i of set.keys()){
//     console.log(i)
// }
// for(let i of map.keys()){
//     console.log(i)
// }

// //Default iterators for collection type
// for(let i in array){//it works without calling default iterators also
//     console.log(i)
// }
for(let  [key,value] of map){
    console.log(key+ "="+value)
}

//string iterator
//fot loops wont print double byte characters so we are using for of loop here to iterate
var message = "A B C D";
for(let i of message){
    console.log(i)
}
//for NodeList also we can use itrators