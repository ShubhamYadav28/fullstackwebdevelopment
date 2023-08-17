const fs = require('fs');

const data = "Node.js is a platform that utilizes Javascript and is primarily employed for developing web applications that are highly focused on input/output operations."

fs.writeFileSync('nodejs_architecture.txt', data);

const ReadData = fs.readFileSync('nodejs_architecture.txt');

console.log('Content: '+ ReadData.toString());