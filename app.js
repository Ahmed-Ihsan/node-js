const express = require ('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const usersRouters = require('./routers/usersRoute');

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

app.get('/',(req,res)=>{
  res.render('home' , {title1:'this title from node js',title:'Home'});
});

app.get('/about',(req,res)=>{
  //res.send('<h1>Ahmed ihsan 1 </h1>');
  res.render('about',{title:'About'});
});

app.get('/about12',(req,res)=>{
  //res.send('<h1>Ahmed ihsan 1 </h1>');
  res.redirect('/about');
});

app.use('/users',usersRouters);

app.use((req,res)=>{
  //res.send('<h1>Ahmed ihsan 2 </h1>');
  res.render('404',{title:'404'});
});