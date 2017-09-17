const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const morgan = require('morgan');
var path = require('path');

const Mentor = require('./models/mentor');

const port = process.env.PORT || 3090;


const app = express();
const server = app.listen(port, () => {
  console.log('Server ready on:', port);
});

app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../build'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../build');
  });

app.get('/mentors', (req, res) => {

  const { search } = req.query;
  console.log(search);



  Mentor.find({})
    .then(mentors => {

      let items = mentors.filter(item => {
            let item2 = item.description.toLowerCase();
            return item2.indexOf(search.toLowerCase()) !=-1;
          })

      res.json(items);
    });
  });

app.get('/mentor', (req, res) => {

  const { id } = req.query;
  console.log(id);


  Mentor.find({ _id: id })
    .then(mentor => {
      res.json(mentor);
    });
  });

  app.post('/mentors', (req, res) => {

    const { name, image, description } = req.body;

    const mentor = new Mentor({ name, description });

    mentor.save()
    .then((data) => {
        console.log('mentor saved');
        res.send('mentor');
      })
      .catch(error => {
        console.log(error);
        res.status(422).send(error);
      })
  })


// плиз не тырьте логины
const url = 'mongodb://HappyLoL:12345678@ds141024.mlab.com:41024/mentors';

mongoose.connect(url);
mongoose.connection
   .once('open', () => {
     console.log('opeend');

   })
   .on('error', (error) => {
     console.warn('Warning', error);
   });


   app.use(function(req, res, next) {
       // res.sendFile(__dirname + '/build');
       res.sendFile(path.join(__dirname, '../build/index.html'));
       // express.static.send(req, res, next ,{
       //     root: __dirname + "/public",
       //     path: req.url,
       //     getOnly: true
       // });
   });
