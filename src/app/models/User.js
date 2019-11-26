const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    room: {
      type: mongoose.Types.ObjectId,
      ref: 'Room',
      required: true,
    },
    isSchool: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// eslint-disable-next-line func-names
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 8);
});

UserSchema.methods = {
  compareHash(password) {
    return bcrypt.compare(password, this.password);
  },
};

UserSchema.statics = {
  generateToken({ id }) {
    return jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.ttl,
    });
  },
};

export default mongoose.model('User', UserSchema);
