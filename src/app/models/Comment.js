const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    project: {
      type: mongoose.Types.ObjectId,
      ref: 'Project',
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
    tags: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Comment', CommentSchema);
