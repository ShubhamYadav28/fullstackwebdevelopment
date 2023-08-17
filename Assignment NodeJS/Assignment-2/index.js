const fs = require('fs');

const data = "Node.js is a platform that utilizes Javascript and is primarily employed for developing web applications that are highly focused on input/output operations."

fs.writeFileSync('nodejs_architecture.txt', data);