const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const SubscribeMessage = (ChennelName) => {
    console.log(`Thanks For Subscribing to ${ChennelName}`);
}

eventEmitter.addListener('Subscribe', SubscribeMessage);

eventEmitter.emit('Subscribe', 'College Wallah')

console.log(`The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`);

eventEmitter.setMaxListeners(5);

console.log(`The updated maximum number of event listners are: ${eventEmitter.getMaxListeners()}`);
