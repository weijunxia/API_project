const mongoose = require('mongoose')
const AuthorSchema = require('./author')
const PostSchema = require('./post')

const Author = mongoose.model('authors', AuthorSchema)
const Post = mongoose.model('posts', PostSchema)

module.exports = {
  Author,
  Post
}
