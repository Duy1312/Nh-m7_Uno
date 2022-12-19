
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
​
app.use(express.static(__dirname + '/public'));
io.on('connection', onConnection);
http.listen(port, () => console.log('listening on port ' + port));
​
function onConnection(socket) {
   console.log('a user connected');
}

// Given a card number, returns its color
// function

function cardColor(num) {
 let color;
 if (num % 14 === 13) {
   return 'black';
 }
 switch (Math.floor(num / 14)) {
   case 0:
   case 4:
     color = 'red';
     break;
   case 1:
   case 5:
     color = 'yellow';
     break;
   case 2:
   case 6:
     color = 'green';
     break;
   case 3:
   case 7:
     color = 'blue';
     break;
 }
 return color;
}
​

 //Given a card number, returns its type

function cardType(num) {
 switch (num % 14) {
   case 10: //Skip
     return 'Skip';
   case 11: //Reverse
     return 'Reverse';
   case 12: //Draw 2
     return 'Draw2';
   case 13: //Wild or Wild Draw 4
     if (Math.floor(num / 14) >= 4) {
       return 'Draw4';
     } else {
       return 'Wild';
     }
   default:
     return 'Number ' + (num % 14);
 }
}