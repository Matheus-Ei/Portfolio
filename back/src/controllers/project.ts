// Libraries
import { Request, Response } from 'express';
import dotenv from 'dotenv';

// Models
import ProjectModel from '../models/project';
import TechnologyModel from '../models/technology';
import ProjectImageModel from '../models/projectImage';
import ProjectTechnologyModel from '../models/projectTechnology';
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

      const images = await ProjectImageModel.findAll({
        where: { project_id: id },
      });

      const technologies = await operations.query(
        `
        SELECT 
          technology.icon,
          technology.title, 
          technology.description
        FROM project_technology
        JOIN technology 
          ON technology.id = project_technology.technology_id
        WHERE project_technology.project_id = $1;
      `,
        [id],
      );

      project?.setDataValue('technologies', technologies[0]);
      project?.setDataValue(
        'images',
        images.map((image) => image.src),
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

    if (password != process.env.AUTH_PASSWORD) {
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
        await ProjectImageModel.create({ data: image, project_id: project.id });
      });

      technologies.forEach(async (lang: string) => {
        const tech = await TechnologyModel.findOne({
          where: { title: lang },
        });

        await ProjectTechnologyModel.create({
          technology_id: tech?.id,
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
