import User from '../models/User';

const { ObjectId } = require('mongoose').Types;

class UserController {
  async store(req, res) {
    const { email } = req.body;

    if (await User.findOne({ email })) {
      return res.status(400).json({ error: 'Usuário já existe!' });
    }

    const user = await User.create(req.body);

    return res.json(user);
  }

  async index(req, res) {
    const users = await User.find()
      .where('room')
      .all(new ObjectId(req.params.room_id));

    return res.status(200).json(users);
  }
}

module.exports = new UserController();
