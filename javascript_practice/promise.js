function walkdog()
{

    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    const dog=false;//place false and observe
    if(dog)
    {
        resolve("you walk the dog")
    }
    else{
        reject("you do not walk")
    }
    },1500)
    })
}
function walkcat()
{

    return new Promise((resolve,reject)=>{
setTimeout(()=>{
        resolve("you walk the cat")
    },1500)
    })
}

function walkhorse()
{

    return new Promise((resolve,reject)=>{
setTimeout(()=>{
        resolve("you walk the horse")
    },1500)
    })
}
function walkmummy()
{

    return new Promise((resolve,reject)=>{
setTimeout(()=>{
        resolve("you walk the mummy")
    },1500)
    })
}

walkdog().then(value=>{console.log(value);return walkcat()})
.then(value=>{console.log(value);return walkhorse()})
.then(value=>{console.log(value);return walkmummy()})
.then(value=>{console.log(value);console.log("you finished all")})

.catch(error=>console.error(error));
