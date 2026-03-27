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
async function doworks()
{
    try{
 const dogresult=await walkdog();
 console.log(dogresult)
 const catresult=await walkcat();
 console.log(catresult)
 const horseresult=await walkhorse();
 console.log(horseresult)
const mummyresult=await walkmummy();
 console.log(mummyresult)
}
catch(error)
{
    console.log(error)
}
}

doworks()