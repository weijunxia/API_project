const { Post } = require('../models')

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find()
    return res.status(200).json({ allPosts })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllPosts
}
