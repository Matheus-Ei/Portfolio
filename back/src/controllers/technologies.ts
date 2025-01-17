// Library
import { Request, Response } from 'express';
import dotenv from 'dotenv';

// Local
import TechnologiesModel from '../models/technologies';

class TechnologiesController {
  public async add(req: Request, res: Response) {
    const { name, description, logo, password } = req.body;

    if (!name || !description || !logo) {
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
      const lang = await TechnologiesModel.create({
        name,
        description,
        logo,
      });

      res.status(201).send({
        message: 'Programming language created successfuly',
        data: lang,
      });
    } catch (error) {
      res
        .status(500)
        .send({ message: 'Error creating a programming language', error });
    }
  }

  public async getAll(req: Request, res: Response) {
    try {
      const tech = await TechnologiesModel.findAll();

      res.status(200).send({
        message: 'Here are all programming languages',
        data: tech,
      });
    } catch (error) {
      res
        .status(500)
        .send({ message: 'Error getting the programming languages', error });
    }
  }
}

export default new TechnologiesController();
