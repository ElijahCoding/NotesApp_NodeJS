console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

console.log(notes.add(2,5))

// var user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);
