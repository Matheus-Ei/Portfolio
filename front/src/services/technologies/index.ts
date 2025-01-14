// Local
import Request from 'modules/Request';
import { TechnologyType } from './types';

interface InputTechType extends TechnologyType {
  password: string;
}

class TechnologiesService {
  static async create(data: InputTechType) {
    try {
      await Request.post('tech', data);
      return true;
    } catch (error) {
      return error;
    }
  }

  static async getAll() {
    try {
      const response = await Request.get('tech');
      const res: TechnologyType[] = response.data;
      return res;
    } catch {
      return null;
    }
  }
}

export default TechnologiesService;
