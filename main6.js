//Callbacks
doAsyncExample1 = (cb) => {
    cb();
} 
doAsyncExample1(()=>{console.log("Callback-1 Called")});


//
doAsyncExample2 = (cb) => {
    //cb(); //Gives Error
    setTimeout(cb, 0);
}

//Callbacks by themselves are synchronous
//By creating seperate thread callbacks becomes asynchrous
doAsyncExample2(() => { console.log(message) });
let message = "Callback-2 Called";

doAsyncExample3 = (cb) => {
    cb(null,"Callback-3 Called");
}

doAsyncExample3((err, param)=>{
    if(err!==null){
        console.log(err);
    }else {
        console.log(param);
    }
});

//Example of callback Hell
doAsyncExample4 = (cb) => {
    setTimeout(()=>{
        console.log("Calling Async Callback");
        cb();
    }, 0);
}

doAsyncExample4(()=>{
    doAsyncExample4(()=>{
        doAsyncExample4(()=>{
            console.log("Well this is callback hell")
        });
    });
});

//Promises
//Solution to the callback hell
//Promises is lways asynchrous
doPromiseExample1 = () => {
    const promise = new Promise((resolve, reject) => {
        console.log("Async Work Completed");
        if(false) resolve({a:"data"});
        else reject({a:"error"});
    });
   return promise;
}

doPromiseExample1().then(
    (res)=>{ console.log("Promise Resolved " + res.a);},
    (err)=>{ console.log("Promist Rejected " + err.a);}
   );

doPromiseExample2 = () => {
    let promise = Promise.resolve("done");
    return promise;
}

//Chaining promise
//To chain promise return something is must
doPromiseExample2().then((val)=>{
    console.log(val);
    return "done2";
}).then((val)=>{
    console.log(val);
});

//Forking
doPromiseExample2().then(val => console.log(val))
                   .catch( (err) => {})
                   .finally(()=>{ console.log("finally")});

//reject is automatically called in case of throw
//you can also have a catch handler at the at of promise chain
//you can also have finally handler for clean ups - finally will be always be called
//resolve needs to be passed in completion callback of asynchrous task
const doPromiseExample3 = (delay) => {
    return new Promise( (resolve) => {
        setTimeout(()=>{
            console.log("Resolving....");
            resolve(delay);
       }, delay)
    });
}

doPromiseExample3(1000).then(()=>{console.log("Resolved")});


let promises = [doPromiseExample3(1000),doPromiseExample3(2000)];

//Promise all
//wait till all of them are finished
Promise.all(promises).then((values)=>{console.log(values);});


//Async Await
//When to use promise vs Async Await

//Async function
const promiseDemo = () => Promise.resolve("done111");
   
async function executeCall() {
    let value = await promiseDemo();
    console.log(value)
}

executeCall();

