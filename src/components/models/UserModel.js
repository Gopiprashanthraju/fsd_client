const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
mongoose.connect('mongodb+srv://Gopi:Gopino.1@cluster0.luogiyd.mongodb.net/')
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, required: true },
  profilepic: { type: Buffer },
  hash: { type: String, required: true },
  salt: { type: String, required: true }
})
userSchema.plugin(passportLocalMongoose)
const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel
