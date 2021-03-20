const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
    firstName: {
        type: String,
        required: true,
      },
      lestName: {
        type: String,
        required: true,
      },
      age: {
        type: String,
        required: true
      },
    },{ timestamps: true });

const fromdb = mongoose.model('blogs',BlogPost);
module.exports = fromdb;