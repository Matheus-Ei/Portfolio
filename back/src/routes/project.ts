// Librareis
import { Router } from 'express';

// Local
import projectController from '../controllers/project';

class ProjectRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.get('/', projectController.getAll);
    this.router.get('/:id', projectController.get);
    this.router.post('/', projectController.create);
  }
}

export default new ProjectRouter();
