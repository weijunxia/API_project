const { Schema } = require('mongoose')

const Author = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number },
    gender: { type: String }
  },
  { timestamps: true }
)
module.exports = Author
