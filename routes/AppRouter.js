const { Router } = require('express')
// const controllers = require('../controllers')
const PostController = require('../controllers/PostControllers')
const AppRouter = Router()

// AppRouter.get('/', (req, res) => res.send())
AppRouter.get('/posts', PostController.getAllPosts)
// AppRouter.post('/posts', controllers.createPost)
// AppRouter.put('/posts', controllers.updatePost)
// AppRouter.delete('/posts', controllers.deletePost)

module.exports = AppRouter
