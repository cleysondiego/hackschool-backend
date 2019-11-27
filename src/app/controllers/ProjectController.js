import User from '../models/User';
import Project from '../models/Project';

class ProjectController {
  async index(req, res) {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado!' });
    }

    if (!user.isSchool) {
      return res.status(400).json({ error: 'Usuário não permitido!' });
    }

    const projects = await Project.find();

    return res.json(projects);
  }

  async show(req, res) {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado!' });
    }

    const project = await Project.findById(req.params.project_id);

    return res.json(project);
  }

  async update(req, res) {
    const { project_id, room_id } = req.body;

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado!' });
    }

    const project = await Project.findById(project_id);

    project.room_id = room_id;
    project.save();

    return res.json(project);
  }

  async store(req, res) {
    const { title, description } = req.body;

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado!' });
    }

    const project = await Project.create({
      title,
      description,
    });

    return res.json(project);
  }
}

module.exports = new ProjectController();
