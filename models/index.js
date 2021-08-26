const mongoose = require('mongoose')
const AuthorSchema = require('./Author')
const PostSchema = require('./Post')

const Author = mongoose.model('authors', AuthorSchema)
const Post = mongoose.model('posts', PostSchema)

module.exports = {
  Author,
  Post
}
