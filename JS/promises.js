function register(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            return reject("Network Error")
            console.log("Register end");
            //resolve();
        }, 5000);
    })
    
}

function sendemail(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Email sent");
            resolve();
        }, 5000);
    })
    
}

function login(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Login End");
            resolve();
        }, 6000);
        
    })
    
}

function getuserdata(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Got User Data");
            resolve();
        }, 5000);
    })
   
}

function displaydata(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Displayed data");
        }, 4000);
        resolve();
    })
   
    
}

register().then(sendemail).then(login).then(getuserdata).then(displaydata).catch((err)=>{
    console.log("Error: "+err )
})