const { Post } = require('../models')

const getAllPosts = async (req, res) => {
  try {
    const results = await Post.find()
    return res.status(200).json({ results })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createNewPost = async (req, res) => {
  try {
    const results = await new Post(req.body)
    await newPost.save()
    return res.status(201).json({ results })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const editPost = async (req, res) => {
  try {
    /* const results = await */
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deletePost = async (req, res) => {
  try {
    // const results = await
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllPosts,
  createNewPost,
  editPost,
  deletePost
}
