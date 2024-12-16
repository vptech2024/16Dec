// const prom1 = new Promise(function(resolve,reject){
//     console.log("Before Log - Prom1");
//     setTimeout(function(){
//         console.log("After 3 sec - Prom1");
//         resolve();
//         console.log("In Log - Prom1");
//     },2500)
//     console.log("After Log - Prom1");
// })

// prom1.then(function(){
//     console.log("Prom1 consumed...");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("-Hey Async w/o Variable - Prom2 After setTimeout");
//         resolve();
//     },2200)
//     }).then(function(){
//         console.log(".then Async w/o Variable - Resolved - Prom2 consumed...");
//     })

// const prom3 =new Promise(function(resolve,reject){
// setTimeout(function(){
//     console.log("- Hey Async w/o Var - Prom3 After setTimeout");
//     resolve({username:"Hitesh",email:"vp@example.com"});
// },2500)
// })
// prom3.then(function(user){
//     console.log(user);
//     console.log("In .then Async - Resolved with Var - Prom3 ...");
// })


const prom4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(error){
            resolve({username:"VP",pass:"123"})
            console.log("In Resolved - Prom4")
        } else{
            reject("Erorr: Something went wrong...")
        }
    },1000)
})

prom4.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
})

//console.log(userName);