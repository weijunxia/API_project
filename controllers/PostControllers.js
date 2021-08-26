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
    await results.save()
    return res.status(201).json({ results })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const editPost = async (req, res) => {
  try {
    const { id } = req.params
    const updated = await Post.findbyIdAndUpdate(id, req.body, { new: true })
    if (!updated) throw Error('Post not found')
    return res.status(200).json(updated)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Post.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Post deleted')
    }
    throw new Error('Post not found')
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
