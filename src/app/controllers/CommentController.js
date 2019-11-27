import Comment from '../models/Comment';
import User from '../models/User';
import Project from '../models/Project';

const { ObjectId } = require('mongoose').Types;

class CommentController {
  async index(req, res) {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado!' });
    }

    if (!user.isSchool) {
      return res.status(400).json({ error: 'Usuário não permitido!' });
    }

    const project = await Project.findById(req.params.project_id);

    if (!project) {
      return res.status(400).json({ error: 'Projeto não encontrada!' });
    }

    const comments = await Comment.find()
      .where('project')
      .all(new ObjectId(req.params.project_id));

    return res.json(comments);
  }

  async store(req, res) {
    const { title, project_id, text, tags } = req.body;

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado!' });
    }

    if (user.isSchool) {
      return res
        .status(400)
        .json({ error: 'Escola não é permitida a criar perguntas!' });
    }

    const project = await Project.findById(project_id);

    if (!project) {
      return res.status(400).json({ error: 'Projeto não encontrado!' });
    }

    const comment = await Comment.create({
      title,
      project: project_id,
      author: req.userId,
      text,
      tags,
    });

    return res.json(comment);
  }
}

module.exports = new CommentController();
