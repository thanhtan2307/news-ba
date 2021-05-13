const postRouter = require('./post')
const siteRouter = require('./site')
const signUpRouter = require('./sign-up')
const signInRouter = require('./sign-in')
const meRouter = require('./me')
const authRouter = require('./auth')
const searchRouter = require('./search')
const categoryRouter = require('./category')
 const newsRouter = require('./news')

const route = (app) => {
    app.use('/api/site', siteRouter)
    app.use('/api/posts', postRouter)
    app.use('/api/sign-up', signUpRouter)
    app.use('/api/sign-in', signInRouter)
    app.use('/api/me', meRouter)
    app.use('/api/auth', authRouter)
    app.use('/api/search', searchRouter)
    app.use('/api/categories', categoryRouter)
<<<<<<< HEAD
    app.use('/api/news', newsRouter)
=======
//      app.use('/api/news', newsRouter)
>>>>>>> 4758c5055ae7419466c2e24da7c15feee231fe7d
}

module.exports = route
