const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const SubscribeMessage = (ChennelName) => {
    console.log(`Thanks For Subscribing to ${ChennelName}`);
}

eventEmitter.addListener('Subscribe', SubscribeMessage);

eventEmitter.emit('Subscribe', 'College Wallah')