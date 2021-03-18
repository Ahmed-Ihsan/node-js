const express = require ('express')
const morgan = require('morgan');

const app = express();

app.set('view engine' , 'ejs');
app.use(express.static('public'));
app .listen(5000);
app.use(morgan('dev'))

app.get('/',(req,res)=>{
  res.render('home' , {title1:'this title from node js',title:'Home'});
})


app.get('/about',(req,res)=>{
  //res.send('<h1>Ahmed ihsan 1 </h1>');
  res.render('about',{title:'About'});
})

app.get('/about12',(req,res)=>{
  //res.send('<h1>Ahmed ihsan 1 </h1>');
  res.redirect('/about');
})

app.use((req,res)=>{
  //res.send('<h1>Ahmed ihsan 2 </h1>');
  res.render('404',{title:'404'});
})