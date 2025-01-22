const events = require("events")

const eventEmitter = new events.EventEmitter()

//to create
eventEmitter.on("print", () => {
    console.log("this is the print event");
})

eventEmitter.addListener("msg", () => {
    console.log("the msg event");
})

//to invoke
// eventEmitter.emit("print")
// eventEmitter.emit("msg")

//remove events
eventEmitter.removeAllListeners("print")

eventEmitter.emit("print") //will not execute as print event is already removed