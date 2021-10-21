// function add(fisrt, second){
// var promise = new Promise(function (resolve, reject){
    
//         if(first>second){
//             resolve();
//             return first+second;
//         }
//         else{
//             reject();
//         }
//     }
// )}
// promise.then((err)=>{
//     console.log(err.message);
// })
// console.log(add(4,3));
// console.log("hai");
// let promise = new Promise(function(resolve,reject){
//     function Add(first, second){
//         if(first>second){
//          resolve(first+second)
//         }
//         else{
//             reject();
//         }
//      }
// });
// var c = Add(3, 4);
// console.log(c);

let P = new Promise((resolve, reject)=>{
    let add = 1+3;
    if(add==4){
        resolve("Sucess");
    }else{
        reject("Failed")
    }
})

P.then((message)=>{
    console.log("This is from then " + message);
}).catch((message)=>{
    console.log("This is from then " + message);
})


function mul(first, second){
    return new Promise((resolve,reject)=>{
        if (first>second){
            resolve(first*second)
        }else{
            reject("No")
        }
    })
}

mul().then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message)
})