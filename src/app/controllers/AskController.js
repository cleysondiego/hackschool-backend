import Ask from '../models/Ask';
import User from '../models/User';

class AskController {
  // async index(req, res) {
  //   const user = await User.findById(req.userId);
  //   if (!user.isSchool) {
  //     return res.status(400).json({ error: 'Usuário não permitido!' });
  //   }
  //   const rooms = await Room.all();
  //   return res.json(rooms);
  // }
  // async store(req, res) {
  //   const user = await User.findById(req.userId);
  //   if (!user.isSchool) {
  //     return res.status(400).json({ error: 'Usuário não permitido!' });
  //   }
  //   const room = await Room.create(req.body);
  //   return res.json(room);
  // }
}

module.exports = new AskController();
