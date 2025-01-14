// Librareis
import { Router } from 'express';

// Local
import technologiesController from '../controllers/technologies';

class TechnologiesRoute {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.post('/', technologiesController.add);
    this.router.get('/', technologiesController.getAll);
  }
}

export default new TechnologiesRoute();
