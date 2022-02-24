require('dotenv').config();

const defaultMessage = { 
  app_id: process.env.ONE_SIGNAL_API_ID,
  contents: {"en": "Um novo trator foi adicionado ao AgroDB."},
  headings: {"en": "Trator adicionado"},
  included_segments: ["Subscribed Users"]
};

const sendNotification = function(data = defaultMessage) {
  var headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": `Basic ${process.env.ONE_SIGNAL_API_KEY}`
  };
  
  var options = {
    host: "onesignal.com",
    port: 443,
    path: "/api/v1/notifications",
    method: "POST",
    headers: headers
  };
  
  var https = require('https');
  var req = https.request(options, function(res) {  
    res.on('data', function(data) {
      console.log("Push notificarion response:");
      console.log(JSON.parse(data));
    });
  });
  
  req.on('error', function(e) {
    console.log("Push notificarion ERROR:");
    console.log(e);
  });
  
  req.write(JSON.stringify(data));
  req.end();
};

module.exports = { sendNotification }