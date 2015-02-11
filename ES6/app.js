var express = require('express');
var app = express();
var pageNum;

app.use('/lib', express.static(__dirname + '/lib'))
app.use('/bower_components', express.static(__dirname + '/bower_components'))

app.get('/api/book/:book', function (req, res, next) {
  bookNum = req.params.book || 0;
  switch (+bookNum) {
  case 0:
    res.send({
      "page": "1",
      "results": [{
        "title": "A Brave NUI World",
        "author": "Some Person"
      }, {
        "title": "A Brave New World",
        "author": "Some Other Person"
      }, {
        "title": "Another title",
        "author": "Someone else"
      }, {
        "title": "Yup",
        "author": "Yuppers"
      }]
    });
    break;
  case 1:
    res.send({
      "page": "2",
      "results": [{
        "title": "Dynamic Books",
        "author": "Some Person"
      }, {
        "title": "This is an API Book",
        "author": "Some Other Person"
      }, {
        "title": "Another API Book",
        "author": "Someone else"
      }, {
        "title": "Yeahhh",
        "author": "Yuppers"
      }]
    });
    break;
  case 2:
    res.send({
      "page": "3",
      "results": [{
        "title": "Again?",
        "author": "Some Person"
      }, {
        "title": "Really?",
        "author": "Some Other Person"
      }, {
        "title": "Another one?",
        "author": "Someone else"
      }, {
        "title": "Yup.",
        "author": "Yuppers"
      }]
    });
    break;
  case 3:
    res.send({
      "page": "4",
      "results": [{
        "title": "And another...",
        "author": "Some Person"
      }, {
        "title": "Lets stop",
        "author": "Some Other Person"
      }, {
        "title": "Right NOW",
        "author": "Someone else"
      }, {
        "title": "No!",
        "author": "Yuppers"
      }]
    });
    break;
  }
});

app.listen(1718, function () {
  console.log('Server running on port: 1718');
});