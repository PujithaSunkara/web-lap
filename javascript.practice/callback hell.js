//asynchronous function

//function test1()
//{
  //  setTimeout(()=>{
    //    console.log("task1 completed")
    //},2000)
//}
//to make asynchrnous functions works as synchronous or in a order we need to add callback like below
function test1(callback)
{
    setTimeout(()=>{
        console.log("task1 completed");
        callback();
    },2000)
}
function test2(callback)
{
    setTimeout(()=>{
        console.log("task2 completed");
        callback();
    },2000)
}
function test3(callback)
{
    setTimeout(()=>{
        console.log("task3 completed");
        callback();
    },2000)
}
function test4(callback)
{
    setTimeout(()=>{
        console.log("task4 completed");
        callback();
    },2000)
}

test1(()=>{
    test2(()=>{
        test3(()=>{
            test4(()=>{
                console.log("All tasks are completed")
            })
        })
    })
})