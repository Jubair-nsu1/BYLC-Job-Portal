const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const AdminData = require('../models/admin.model')


const loginUser = async (req, res) => {
    const { email, password } = req.body
    console.log(req.body)

    // Check for user email
    const user = await AdminData.findOne({ email })
  
    if (user && (await bcrypt.compare(password, user.password))) {
      console.log('Fullname: '+user.fullname)
      console.log('UserID: '+user.id)
      console.log('Email: '+user.email)
      console.log('Token: '+generateToken(user._id))
      res.json({
        _id: user.id,
        email: user.email,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      res.json({ status: 'error', error: 'Invalid credentials' })
      console.log('Cant process')
    }
}
  
// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, 'secret123', {
      expiresIn: '1d',
    })
}
  
module.exports = {
    loginUser,
}