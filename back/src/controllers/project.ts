// Libraries
import { Request, Response } from 'express';
import dotenv from 'dotenv';

// Models
import ProjectModel from '../models/project';
import ProgrammingLanguageModel from '../models/programmingLanguage';
import ImageModel from '../models/image';
import ProjectLanguageModel from '../models/projectLanguage';
import operations from '../database/operations';

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

      const images = await ImageModel.findAll({
        where: { project_id: id },
      });

      const programmingLanguages = await operations.query(`
        SELECT 
          programming_language.name, 
          programming_language.description, 
          programming_language.logo
        FROM project_language
        JOIN programming_language 
          ON programming_language.id = project_language.language_id
        WHERE project_language.project_id = 4;
      `);

      project?.setDataValue('programmingLanguages', programmingLanguages[0]);
      project?.setDataValue(
        'images',
        images.map((image) => image.data),
      );

      res
        .status(200)
        .send({ message: 'Here is the project data', data: project });
    } catch (error) {
      res
        .status(500)
        .send({ message: 'Error returning the project', error: error });
    }
  }

  public async create(req: Request, res: Response) {
    const {
      logo,
      title,
      description,
      start_date,
      password,
      images = [],
      programming_languages = [],
      host_link = null,
      code_link = null,
      end_date = null,
    } = req.body;

    if (!logo || !title || !description || !start_date) {
      res
        .status(400)
        .send({ message: "Required fields in the body weren't sent" });
      return;
    }

    dotenv.config();

    if (password == process.env.PASSWORD) {
      res.status(401).send({ message: 'Password incorrect' });
      return;
    }

    try {
      const project = await ProjectModel.create({
        logo,
        title,
        description,
        host_link,
        code_link,
        start_date,
        end_date,
      });

      images.forEach(async (image: string) => {
        await ImageModel.create({ data: image, project_id: project.id });
      });

      programming_languages.forEach(async (lang: string) => {
        const language = await ProgrammingLanguageModel.findOne({
          where: { name: lang },
        });

        await ProjectLanguageModel.create({
          language_id: language?.id,
          project_id: project.id,
        });
      });

      res
        .status(201)
        .send({ message: 'Project created successfuly', data: project });
    } catch (error) {
      res.status(500).send({ message: 'Error creating the project', error });
    }
  }
}

export default new ProjectController();
