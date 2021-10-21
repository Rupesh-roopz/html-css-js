//Creating a map
// let map = new Map();
// map.set("title","Understandinf ES6");
// console.log(map.get("title"))

//we can also use keys as objects

// let map = new Map();
// key1={
//     name:"rupesh",
// };
// kay2={};

// map.set("key1",5);
// map.set("key2",42);

// console.log(map.get("key1"));

// //Map methods

// console.log(map.has("key2")); //returns wether key is present or not
// console.log(map.delete("key1"));//deletes particular key and its value
// map.clear(); //remove all keys and values from the map
// console.log(map.has("key2"));
// console.log(map.size); //returns size of key-value pairs

// //maps Intialization
// //->can intialize maps by passing an aray into the map

// let mapTemp=new Map([["name","Rupesh"], ["age",23]]);
// console.log(mapTemp.get("name"));
// console.log(mapTemp.get("age"));

// //For-each method in maps
// //for each method in maps accepts three parameters as sets
// /**
//  1.THe value from the next position in the map
//  2.the key for that value
//  3.the map from which the value is read
//  */

//  mapTemp.forEach(function (value, key, ownerMap) {
//      if(ownerMap===mapTemp)
//      console.log(key+" : "+value)
     
//  })

 //Weak maps
 /*
 ->Weak maps are the maps where keys should be objects 
 ->an error is throw if the key is non-object

 ->when there is no references to a weak map key outside a weak map, the key-value pair
 removed from the weak map
 */

 let key1={};
 let key2 = {};
 let map = new WeakMap([[key1,"Rupesh"], [key2,23]]);

console.log(map.has(key1))

//weakMap methods

//->has()
//->delete()

map.delete(key2);
console.log(map.has(key2))
/*
Keep in mind that weak maps give you very 
little visibility into their contents, so you can’t 
use the forEach() method, the size property, or the clear() method to 
manage the items. If you need some inspection capabilities,
 then regular maps are a better choice.
 Just be sure to keep an eye on memory usag
*/