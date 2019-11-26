import authConfig from '../../config/auth';

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
      default: 0,
    },
    room: {
      type: mongoose.Types.ObjectId,
      ref: 'Room',
      default: null,
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
