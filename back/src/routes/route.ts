// The router for some specific endpoint

// Librareis
import { Router } from 'express';

// Local
import controller from '../controllers/controller';

class RouteEx {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.get('/', controller.method);
  }
}

export default new RouteEx();
