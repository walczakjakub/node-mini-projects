setTimeout( () => {
    console.log("excersise in node")
}, 3000)

const interval = setInterval( () => {
    console.log("interval");
    setTimeout( () => {
        clearInterval(interval);
    }, 10*1000)
}, 1000)