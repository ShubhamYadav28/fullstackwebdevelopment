const fs = require('fs');

const NewData = "Node.js is a programming language that utilizes both JavaScript and C/C++ to create its core components.Node.js is a platform that utilizes Javascript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is constructed using Google chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtaint all the application's resources over the internet"

fs.appendFileSync('nodejs_architecture.txt', NewData);

const ReadData = fs.readFileSync('nodejs_architecture.txt');

console.log('Content: '+ ReadData.toString());