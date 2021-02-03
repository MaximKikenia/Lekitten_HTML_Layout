var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());



app.use(express.static(__dirname + '/dist'));

app.get('*', function(req, res){
  res.sendfile(__dirname + '/dist/index.html');
});



app.post('/', function (req, res) {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shameless.cansol@gmail.com',
      pass: 'MaximK1991'
    }
  });

  var mailOptions = {
    from: 'shameless.cansol@gmail.com',
    to: 'shameless.cansol@gmail.com',
    subject: 'LEKITTEN.BY (заявка):',
    html: '<p> <b>Имя:</b> ' + req.body.name + '<br>' + '<b>Номер телефона: </b>' + req.body.phone + '<br>' + '<b>Почта: </b>' + req.body.email + '<br>' + '<b>Текст сообщения: </b>' + req.body.description + '</p>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send(false);
    } else {
      console.log('Email sent: ' + info.response);
      res.send(true);
    }
  });
  
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});