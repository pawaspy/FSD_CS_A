const res = fetch("https://api.github.com/users/pawaspy");
res.then(
    (res)=>{
        return res.json();
    }
).then(
    (data)=>console.log(data)
).catch(
    (err)=>console.log("Error: ", err)
);