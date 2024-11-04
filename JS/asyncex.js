function register(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //return reject("Network Error")
            console.log("Register end");
            resolve();
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
            reject("Login Failed")
            console.log("Login End");
            //resolve();
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

async function authentication(){
    try{
    await register();
    await sendemail();
    await login();
    await getuserdata();
    await displaydata();
    }
    catch(err){
        console.log("Error: "+err);
    }
}

authentication();