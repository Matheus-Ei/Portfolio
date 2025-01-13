// Librareis
import { Router } from 'express';

// Local
import programmingLanguageController from '../controllers/programmingLanguage';

class ProgrammingLanguageRoute {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.post('/', programmingLanguageController.create);
  }
}

export default new ProgrammingLanguageRoute();
