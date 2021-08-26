const { Router } = require('express')
const PostController = require('../controllers/PostControllers')
const AuthorController = require('../controllers/AuthorControllers')
const AppRouter = Router()

AppRouter.get('/', (req, res) => res.send('Success!'))
AppRouter.get('/posts', PostController.getAllPosts)
AppRouter.post('/posts', PostController.createNewPost)
AppRouter.put('/posts/:id', PostController.editPost)
AppRouter.delete('/posts/:id', PostController.deletePost)
AppRouter.get('/authors', AuthorController.getAllAuthors)
AppRouter.post('/authors', AuthorController.addNewAuthor)

module.exports = AppRouter
