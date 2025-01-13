// Library
import { Request, Response } from 'express';

// Local
import ProgrammingLanguageModel from '../models/programmingLanguage';

class ProgrammingLanguageController {
  public async create(req: Request, res: Response) {
    const { name, description, logo } = req.body;

    if (!name || !description || !logo) {
      res
        .status(401)
        .send({ message: "Required fields in the body weren't sent" });
      return;
    }

    try {
      const lang = await ProgrammingLanguageModel.create({
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
}

export default new ProgrammingLanguageController();
