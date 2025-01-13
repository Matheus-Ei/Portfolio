// Local
import Request from 'modules/Request';
import { ProgrammingLanguageType } from './types';

class ProgrammingLanguageService {
  static async create(data: ProgrammingLanguageType) {
    try {
      await Request.post('programming-language', data);
      return true;
    } catch {
      return false;
    }
  }

  static async getAll() {
    try {
      const response = await Request.get('programming-language');
      const res: ProgrammingLanguageType[] = response.data;
      return res;
    } catch {
      return null;
    }
  }
}

export default ProgrammingLanguageService;
