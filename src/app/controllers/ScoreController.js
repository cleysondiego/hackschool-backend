import Room from '../models/Room';
import User from '../models/User';

const { ObjectId } = require('mongoose').Types;

class ScoreController {
  async index(req, res) {
    const user = await User.findById(req.userId);

    if (!user.isSchool) {
      return res.status(400).json({ error: 'Usuário não permitido!' });
    }

    const rooms = await Room.find();

    const newRoom = [];

    for (const room of rooms) {
      let totalScore = 0;
      const users = await User.find()
        .where('room')
        .all(new ObjectId(room._id));

      for (const user of users) {
        totalScore += user.score;
      }
      newRoom.push({ ...room.toObject(), score: totalScore });
    }

    return res.json(newRoom);
  }
}

module.exports = new ScoreController();
