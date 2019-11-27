const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    room: {
      type: mongoose.Types.ObjectId,
      ref: 'Room',
      required: false,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Project', ProjectSchema);
