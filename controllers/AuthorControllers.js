const { Author } = require('../models')

const getAllAuthors = async (req, res) => {
  try {
    const allAuthors = await Author.find()
    return res.status(200).json({ allAuthors })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addNewAuthor = async (req, res) => {
  try {
    const newAuthor = await new Author(req.body)
    await newAuthor.save()
    return res.status(201).json({ newAuthor })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllAuthors,
  addNewAuthor
}
