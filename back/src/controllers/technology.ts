// Library
import { Request, Response } from 'express';
import dotenv from 'dotenv';

// Local
import { query } from '../database/connection';

class TechnologyController {
  public async add(req: Request, res: Response) {
    const { title, icon, password } = req.body;

    if (!title || !icon) {
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
      await query(
        `
        INSERT INTO technology(icon, title)
        VALUES ($1, $2)
      `,
        [icon, title],
      );

      res.status(201).send({
        message: 'Technology created successfuly',
      });
    } catch (error) {
      res.status(500).send({ message: 'Error creating a technology', error });
    }
  }

  public async getAll(req: Request, res: Response) {
    try {
      const tech = await query(`
        SELECT *
        FROM technology
      `);

      res.status(200).send({
        message: 'Here are all technologies',
        data: tech,
      });
    } catch (error) {
      res
        .status(500)
        .send({ message: 'Error getting all the technologies', error });
    }
  }
}

export default new TechnologyController();
