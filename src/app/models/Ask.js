const mongoose = require('mongoose');

const AskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    room: {
      type: mongoose.Types.ObjectId,
      ref: 'Room',
      required: true,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Ask', AskSchema);
