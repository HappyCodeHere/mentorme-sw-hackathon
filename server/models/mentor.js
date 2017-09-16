const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MentorSchema = new Schema({
  name: { type: String, required: [true] },
  description: { type: String, required: [true] },
  image: { type: String },
  // text: { type: String, required: [true] },
});

const Mentor = mongoose.model('mentor', MentorSchema);

module.exports = Mentor;
