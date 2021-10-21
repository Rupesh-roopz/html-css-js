let set=new Set();
set.add(5);
set.add("6");
set.add("6");//duplicate-this is ignored
console.log(set.size);
let set1=new Set([1,2,2,2,3,4,5]);
console.log(set1.size);

//Removeing values
/*
has()
clear()
delete()
*/
set1.delete(5);
console.log(set1.size);

//forEach methos for sets
/**
forEach method takes three arguments
1.the value from the next position from the set
2.the same value as the first argument
3.the set from which the value is read
*/

set1.forEach(function(value, key, ownerset){
    console.log(key+"  "+value);
    console.log(ownerset===set1)
})

//Converting sets into arrays
Array=[...set1]
console.log(Array);

/**
 *In a WeakSet instance, the add() method throws an error when passed a 
 non-object (has() and delete() always return false for non-object arguments).
Weak sets are not iterables and therefore cannot be used in a for-of loop.

Weak sets do not expose any iterators (such as the keys() and values() methods),
so there is no way to programmatically determine the contents of a weak set.
Weak sets do not have a forEach() method.
Weak sets do not have a size property.
 */