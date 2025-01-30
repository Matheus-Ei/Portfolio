// Libraries
import { Request, Response } from 'express';
import dotenv from 'dotenv';

// Local
import { query } from '../database/connection';

class ProjectController {
  public async getAll(req: Request, res: Response) {
    try {
      const projects = await query(`
        SELECT * FROM project
      `);

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

      const rawProject = await query(
        `
          WITH project_images AS (
              SELECT 
                  project_id, 
                  ARRAY_AGG(src) AS images
              FROM project_image
              GROUP BY project_id
          ), 
          project_technologies AS (
              SELECT 
                  pt.project_id, 
                  JSONB_AGG(DISTINCT JSONB_BUILD_OBJECT('title', t.title, 'icon', t.icon)) AS technologies
              FROM project_technology pt
              JOIN technology t ON pt.technology_id = t.id
              GROUP BY pt.project_id
          )
          SELECT 
              p.id,
              MAX(p.logo) AS logo,
              MAX(p.title) AS title,
              MAX(p.description) AS description,
              MAX(p.host_link) AS host_link,
              MAX(p.code_link) AS code_link,
              MAX(p.start_date) AS start_date,
              MAX(p.end_date) AS end_date,
              COALESCE(pt.technologies, '[]'::jsonb) AS technologies,
              COALESCE(pi.images, ARRAY[]::text[]) AS images
          FROM project p
          LEFT JOIN project_images pi ON pi.project_id = p.id
          LEFT JOIN project_technologies pt ON pt.project_id = p.id
          WHERE p.id = $1
          GROUP BY p.id, pi.images, pt.technologies;
        `,
        [id],
      );
      const project = rawProject[0];

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

    if (!logo || !title || !description) {
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
      const project = await query(
        `
        INSERT INTO project (logo, title, description, host_link, code_link, start_date, end_date) 
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id
      `,
        [logo, title, description, host_link, code_link, start_date, end_date],
      );

      const projectId = project[0].id;

      // Images
      if (images.length !== 0)
        await query(
          `
            INSERT INTO project_image(src, project_id)
            SELECT UNNEST($1::TEXT[]), $2::INTEGER;
          `,
          [images, projectId],
        );

      // Technologies
      if (technologies.length !== 0)
        await query(
          `
            INSERT INTO project_technology(project_id, technology_id)
            SELECT $1::INTEGER, id FROM technology WHERE title = ANY($2::TEXT[]);
          `,
          [projectId as number, technologies as string[]],
        );

      res.status(201).send({ message: 'Project created successfuly' });
    } catch (error) {
      res.status(500).send({ message: 'Error creating the project', error });
    }
  }
}

export default new ProjectController();
