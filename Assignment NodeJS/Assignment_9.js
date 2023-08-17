const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const SubscribeMessage = (ChennelName) => {
    console.log(`Thanks For Subscribing to ${ChennelName}`);
}

eventEmitter.addListener('Subscribe', SubscribeMessage);

console.log("Calling event listner before removing the event.");
eventEmitter.emit('Subscribe', 'College Wallah')

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("Calling event listner after removing the event.");
eventEmitter.removeListener('Subscribe', SubscribeMessage)

eventEmitter.emit('Subscribe', 'College Wallah')
