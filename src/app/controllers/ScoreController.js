import Room from '../models/Room';
import User from '../models/User';

class ScoreController {
  async index(req, res) {
    const user = await User.findById(req.userId);

    if (!user.isSchool) {
      return res.status(400).json({ error: 'Usuário não permitido!' });
    }

    const population = await User.find()
      .where('isSchool')
      .all(false)
      .populate({
        path: 'room',
        populate: {
          path: '_id',
        },
      });

    // const scoresUsers = population.map(dado => {
    //   return dado.score;
    // });

    // const scores = scoresUsers.reduce((ant, next) => ant + next, 0);

    return res.json(population);
  }
}

module.exports = new ScoreController();
