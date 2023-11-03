const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Gopi:Gopino.1@cluster0.luogiyd.mongodb.net/')
const videoMetadataSchema = new mongoose.Schema({
  // TODO: Need to change schema later
  title: String,
  data: Buffer,
  description: String,
  creator_id: Number,
  upvotes: Number,
  downvotes: Number,
  thumbnail: Buffer
})
module.exports = mongoose.model('VideoMetadata', videoMetadataSchema)
