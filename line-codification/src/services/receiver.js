const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const EventEmitter = require('events');
const WebSocket = require('ws');


const app = express();
const eventEmmiter = new EventEmitter();
const port = 5000;
const route = '/receive-message';

app.use(cors({
  origin: '*'
}));

app.use(bodyParser.json());

const server = app.listen(port, ()=>{
  console.log(`Server running on http://localhost:${port}`);
});

const wss = new WebSocket.Server({server});

wss.on('connection', (ws)=>{
  console.log("Client Connected")

  eventEmitter.on('newMessage', (message) =>{
    ws.send(JSON.stringify({message}));
  });

  ws.on('close', ()=>{
    console.log("Client Disconnected");
  });
});

let receivedMessage = '';
app.post(route, (req, res) =>{
  console.log('Message Received');

  receivedMessage = req.body.message;
  res.status(200).json({status: 'Message Received'});
  eventEmmiter.emit('newMessage', receivedMessage);
});

