const { Router } = require('express')
// const controllers = require('../controllers')
const postController = require('../controllers/PostControllers')
const AppRouter = Router()

AppRouter.get('/', (req, res) => res.send())
AppRouter.get('/posts', postController.getAllPosts)
// AppRouter.post('/posts', controllers.createPost)
// AppRouter.put('/posts', controllers.updatePost)
// AppRouter.delete('/posts', controllers.deletePost)

module.exports = AppRouter
