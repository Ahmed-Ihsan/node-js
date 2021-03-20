const express = require ('express')
const morgan = require('morgan');
const mongoose = require('mongoose');
const db = require('./models/database');

// express app
const app = express();

// connect to mongodb & listen for requests
const dburi = "mongodb+srv://DB_MO:2GU5mxDotq2HCKWu@cluster0.qdmge.mongodb.net/ahmedb?retryWrites=true&w=majority";
mongoose.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result => {app.listen(5000);console.log("running app")})
.catch(err => console.log(err));

// register view engine
app.set('view engine' , 'ejs');

// static file
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes

app.get('/addInDatebase',(req,res)=>{
  const dbSend = db({
    firstName:'ahmed',
    lestName:'ihsan',
    age:'22'
  });
  dbSend.save()
  .then((result)=>{
    res.send(result)
  })
  .catch((err)=>{console.log(err)
  });
});

app.get('/users', (req, res) => {
  db.find().sort({ createdAt: -1 })
  .then(result => {
    res.render('users', { users: result, title: 'All blogs' });
  })
  .catch(err => {
    console.log(err);
  });
});

app.post('/users', (req, res) => {
  const dbSend = new db(req.body);
  dbSend.save()
  .then( result =>{
    res.redirect('/users');
  })
  .catch(err => {
    console.log(err);
    console.log(req.query.firstName)
    res.redirect('/create');
  });
});

app.get('/single-blog/:id', (req, res) => {
  const id = req.params.id;
  db.findById(id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/',(req,res)=>{
  res.render('home' , {title1:'this title from node js',title:'Home'});
})

app.get('/about',(req,res)=>{
  //res.send('<h1>Ahmed ihsan 1 </h1>');
  res.render('about',{title:'About'});
})

app.get('/create',(req,res)=>{
  //res.send('<h1>Ahmed ihsan 1 </h1>');
  res.render('addUser',{title:'ctreate'});
})

app.get('/about12',(req,res)=>{
  //res.send('<h1>Ahmed ihsan 1 </h1>');
  res.redirect('/about');
})

app.use((req,res)=>{
  //res.send('<h1>Ahmed ihsan 2 </h1>');
  res.render('404',{title:'404'});
})