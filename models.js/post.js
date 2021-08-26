const { Schema } = require('mongoose')

const Post = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'authors' }
  },
  { timestamps: true }
)
module.exports = Post
