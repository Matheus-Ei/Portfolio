// Class with the methods that will be called by the routes

// Libraries
import { Request, Response } from 'express';

// Models
import ProjectModel from '../models/project';
import ProgrammingLanguageModel from '../models/programmingLanguage';
import ImageModel from '../models/image';

class ProjectController {
  public async getAll(req: Request, res: Response) {
    try {
      const projects = await ProjectModel.findAll();

      res
        .status(200)
        .send({ message: 'Here is all projects data', data: projects });
    } catch (error) {
      res
        .status(500)
        .send({ message: 'Error returning all projects', error: error });
    }
  }

  public async get(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const project = await ProjectModel.findByPk(id);

      const programmingLanguages = await ProgrammingLanguageModel.findAll({
        where: { project_id: id },
      });

      const images = await ImageModel.findAll({
        where: { project_id: id },
      });

      project?.setDataValue('programmingLanguages', programmingLanguages);
      project?.setDataValue('images', images);

      res
        .status(200)
        .send({ message: 'Here is the project data', data: project });
    } catch (error) {
      res
        .status(500)
        .send({ message: 'Error returning the project', error: error });
    }
  }
}

export default new ProjectController();
