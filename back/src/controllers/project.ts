// Libraries
import { Request, Response } from 'express';
import dotenv from 'dotenv';

// Models
import ProjectModel from '../models/project';
import TechnologiesModel from '../models/technologies';
import ImageModel from '../models/image';
import ProjectTechnologiesModel from '../models/projectTechnologies';
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

      const technologies = await operations.query(`
        SELECT 
          technologies.name, 
          technologies.description, 
          technologies.logo
        FROM project_technologies
        JOIN technologies 
          ON technologies.id = project_technologies.tech_id
        WHERE project_technologies.project_id = ${id};
      `);

      project?.setDataValue('technologies', technologies[0]);
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
      technologies = [],
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

    if (password != process.env.PASSWORD) {
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

      technologies.forEach(async (lang: string) => {
        const tech = await TechnologiesModel.findOne({
          where: { name: lang },
        });

        await ProjectTechnologiesModel.create({
          tech_id: tech?.id,
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
