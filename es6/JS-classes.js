// function person(name){
// this.firstName=name;
// }
// person.prototype.sayName=function(){
//     console.log(this.firstName)
// }
// let person1=new person("rupesh");
// person1.sayName();

// //classes in es6
// class Movie{
   
//     constructor(name,year=1999){
//         this.name=name;
//         this.year=year;
//     }
//     sayMovieName(){
//         console.log(this.name +" in "+this.year);
//     }

// }
// let movie=new Movie("cars");
// movie.sayMovieName();

// //class expressions are designed to be used in variable declarations or passed into functions as arguments.

// let Movie=class{
   
//     constructor(name,year=1999){
//         this.name=name;
//         this.year=year;
//     }
//     sayMovieName(){
//         console.log(this.name +" in "+this.year);
//     }

// }
// let movie=new Movie("cars");
// movie.sayMovieName();

//classes as first class citizens
// function func(classDef){
//     return new classDef
// }
// let obj=func(class{
//     sayHai(){
//         console.log("hai")
//     }
// })
// obj.sayHai()

// //computed member Names
// let methodName="sayMovieName";
// class Movie{
   
//         constructor(name,year=1999){
//             this.name=name;
//             this.year=year;
//         }
//             [methodName](){
//             console.log(this.name +" in "+this.year);
//         }
    
//     }
//     let movie=new Movie("cars");
//     movie.sayMovieName();
    //by the sam eway we can use for accessor properties also

    //accessor properties are we use getter and setter methods
    //to get values and set values to the properties
    
    //Generator mwthods will also work for classes

    //static members-in es6 by usnig static keyword we use static members

    let methodName="sayMovieName";
class Movie{
   
        constructor(name,year=1999){
            this.name=name;
            this.year=year;
        }
            [methodName](){
            console.log(this.name +" in "+this.year);
        }
        static sayYear(){
            console.log(this.year);
        }
    
    }
    let movie=new Movie("cars");

 