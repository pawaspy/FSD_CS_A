function register(cb){
    setTimeout(()=>{
        console.log("Register end");
        cb();
    }, 5000);
    //console.log("Register end")
}

function sendemail(cb){
    setTimeout(()=>{
        console.log("Email sent");
        cb();
    }, 5000);
    //console.log("Email sent")
}

function login(cb){
    setTimeout(()=>{
        console.log("Login End");
        cb();
    }, 6000);
    //waitForFewMilliseconds(5);
    //console.log("login end")
}

function getuserdata(cb){
    setTimeout(()=>{
        console.log("Got User Data");
        cb();
    }, 5000);
    //console.log("got user data")
}

function displaydata(){
    setTimeout(()=>{
        console.log("Displayed data");
    }, 4000);
    //console.log("Display user data")
}

// function waitForFewMilliseconds(sec){
//     setTimeout(()=>{
//         console.log("Register end");
//     }, 5000);
//     const ms = (sec * 1000) + new Date().getTime();
//     while(ms > new Date().getTime()){

//     }
// }

register(function (){
    sendemail(function (){
        login(function (){
            getuserdata(function (){
                displaydata()
            })
        });
    });
});

// This is problem called callback hell. and it is solved by using promises

