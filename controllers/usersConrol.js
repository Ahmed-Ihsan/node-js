const db = require('../models/database');

const add =(req, res)=>{
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
} 

const all_users = (req ,res) =>{
    db.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('users/users', { users: result, title: 'All blogs' });
    })
    .catch(err => {
      console.log(err);
    });
}

const create = (req , res)=>{
    res.render('users/addUser',{title:'ctreate'});
}

const id = (req, res) =>{
    const id = req.params.id;
    db.findById(id)
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
}

const del = (req, res) =>{
    const id = req.params.id;
    db.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/users' });
      })
      .catch(err => {
        console.log(err);
      });
}

module.exports = {
    add ,
    del,
    id,
    create,
    all_users,
}