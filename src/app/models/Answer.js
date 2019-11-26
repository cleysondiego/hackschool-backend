const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    ask: {
      type: mongoose.Types.ObjectId,
      ref: 'Ask',
      required: true,
    },
    best: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Answer', AnswerSchema);
