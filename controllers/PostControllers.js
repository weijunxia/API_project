const { Post } = require('../models')

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find()
    return res.status(200).json({ allPosts })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createNewPost = async (req, res) => {
  try {
    const newPost = await new Post(req.body)
    await newPost.save()
    return res.status(201).json({ newPost })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllPosts,
  createNewPost
}
