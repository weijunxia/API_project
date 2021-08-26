const { Schema } = require('mongoose')

const Author = new Schema(
  {
    name: { type: String, required: true },
    bio: { type: String }
  },
  { timestamps: true }
)
module.exports = Author
