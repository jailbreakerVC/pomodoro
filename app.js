const express = require("express");
const cors = require("cors");
const app = express();
const notifier = require("node-notifier");
const path = require("path");
const { setInterval } = require("timers");
app.use(cors());


const port =  3000;

function sendNotification(message_body,message_tile) {
  notifier.notify({
  title: message_tile,
  message: message_body,
  
});
}

function startPomodoro(time) {
  sendNotification(`Timer starts: ${time}  mins STUDY`,"Studyss");
  setTimeout(sendNotification("Timer ends","Time to study"),10000);

  
}


app.get("/start", (req, res) => {
  startPomodoro(15)
  res.send("Hello World!");
});




app.listen(port);





