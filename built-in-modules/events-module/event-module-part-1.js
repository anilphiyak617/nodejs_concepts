const events = require("events");

console.log("events: ", events);
console.log("events-emitter: ", events.EventEmitter);

// Create a new emitter object.
const emitter = new events.EventEmitter();

// Create a function that will be called when a message is sent.
const onMessage = function (message) {
  console.log(`Received message: ${message}`);
};

// Listen for the "message" event.
emitter.on("message", onMessage);

// Send a message.
emitter.emit("message", "Hello, world!");
/* TODO : why the output of both the consoles is same ????/ */
