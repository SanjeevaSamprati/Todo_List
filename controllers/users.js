const User = require('../models/users')
module.exports.Register = async(req, res, next) => {
    try {
        const { username, password, email } = req.body
        const user = new User({ email, username })
        const registeredUser = await User.register(user, password)
        req.login(registeredUser, (err) => {
            if (err) {
                next(err)
            }
            res.redirect('/todos')
        })
    } catch (e) {
        res.redirect('/register')
    }
}
module.exports.Login = async(req, res) => {
    const redirectUrl = '/todos'
    console.log(redirectUrl)
    res.redirect(redirectUrl)
}
module.exports.renderLogin = (req, res, next) => {
    console.log('render login')
    res.render('login')
}
module.exports.renderRegister = (req, res, next) => {
    res.render('register')
}
module.exports.logout = (req, res, next) => {
    req.logout()
    res.redirect('/')
}