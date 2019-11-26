import Ask from '../models/Ask';
import User from '../models/User';
import Room from '../models/Room';

const { ObjectId } = require('mongoose').Types;

class AskController {
  async index(req, res) {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado!' });
    }

    if (!user.isSchool) {
      return res.status(400).json({ error: 'Usuário não permitido!' });
    }

    const room = await Room.findById(req.params.room_id);

    if (!room) {
      return res.status(400).json({ error: 'Sala não encontrada!' });
    }

    const asks = await Ask.find()
      .where('room')
      .all(new ObjectId(req.params.room_id));

    return res.json(asks);
  }

  async store(req, res) {
    const { title, room_id, text, tags } = req.body;

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado!' });
    }

    if (user.isSchool) {
      return res
        .status(400)
        .json({ error: 'Escola não é permitida a criar perguntas!' });
    }

    const room = await Room.findById(room_id);

    if (!room) {
      return res.status(400).json({ error: 'Sala não encontrada!' });
    }

    const ask = await Ask.create({
      title,
      room: room_id,
      author: req.userId,
      text,
      tags,
    });

    return res.json(ask);
  }
}

module.exports = new AskController();
