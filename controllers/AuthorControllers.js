const { Author } = require('../models')

const getAllAuthors = async (req, res) => {
  try {
    const results = await Author.find()
    return res.status(200).json({ results })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addNewAuthor = async (req, res) => {
  try {
    const results = await new Author(req.body)
    await results.save()
    return res.status(201).json({ results })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllAuthors,
  addNewAuthor
}
