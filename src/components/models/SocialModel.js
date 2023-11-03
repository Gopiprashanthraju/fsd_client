const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Gopi:Gopino.1@cluster0.luogiyd.mongodb.net/')
const SocialSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  TokenID: { type: String, unique: true, required: true },
  email: { type: String, required: true },
  profilepic: { type: Buffer },
  hash: { type: String, required: true },
  salt: { type: String, required: true }
})

const SocialModel = mongoose.model('User', SocialSchema)

module.exports = SocialModel
