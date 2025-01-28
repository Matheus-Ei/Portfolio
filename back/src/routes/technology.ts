// Librareis
import { Router } from 'express';

// Local
import technologyController from '../controllers/technology';

class TechnologiesRoute {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.post('/', technologyController.add);
    this.router.get('/', technologyController.getAll);
  }
}

export default new TechnologiesRoute();
