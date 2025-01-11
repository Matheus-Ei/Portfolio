// Class with the methods that will be called by the routes

// Libraries
import { Request, Response } from 'express';

// Models
import ModelEx from '../models/model';

class Controller {
  public async method(req: Request, res: Response) {
    await ModelEx.create({ name: 'John Doe' });

    res.status(200).send({ message: 'Method called' });
  }
}

export default new Controller();
