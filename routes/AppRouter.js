const { Router } = require('express')
const controllers = require('../controllers')
const AppRouter = Router()

AppRouter.get('/', (req, res) => res.send())
AppRouter.post('/posts', controllers.createPost)
AppRouter.put('/posts', controllers.updatePost)
AppRouter.delete('/posts', controllers.deletePost)

module.exports = AppRouter
