//----------- Micro-task Queue Priority
// adding callbacks in to the next tick queue
Promise.resolve().then(res => {
    console.log("This is in the Promise queue")
})
// callbacks in the promise queue
process.nextTick(() => { 
    console.log('This is in the next tick queue')
})

// timer queue
setTimeout(() => {
    // callbacks in the promise queue
    process.nextTick(() => {
        console.log("This is in the next tick inside the promise queue");
    });
    console.log("This is in the timer queue");
})

// result:
// This is in the next tick queue
// This is in the Promise queue
// This is in the timer queue
// This is in the next tick inside the promise queue