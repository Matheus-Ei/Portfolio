// Local
import Request from 'modules/Request';
import { ProjectType } from './types';

interface ProjectInputType extends ProjectType {
  images: Array<string>;
  technologies: Array<string>;
  password: string;
}

class ProjectService {
  static async get(id?: string | number) {
    try {
      const response = await Request.get(`project/${id}`);
      return response.data;
    } catch {
      return null;
    }
  }

  static async getAll() {
    try {
      const response = await Request.get('project');
      return response.data;
    } catch {
      return null;
    }
  }

  static async create(data: ProjectInputType) {
    try {
      await Request.post('project', data);
      return true;
    } catch (error) {
      return error?.message;
    }
  }
}

export default ProjectService;
