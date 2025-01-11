// The router for some specific endpoint

// Librareis
import { Router } from 'express';

// Local
import projectController from '../controllers/project';

class RouteEx {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.get('/', projectController.getAll);
    this.router.get('/:id', projectController.get);
  }
}

export default new RouteEx();
