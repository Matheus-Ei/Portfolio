// Local
import Request from 'modules/Request';

class Project {
  static async get(id: string | number) {
    try {
      const response = await Request.get(`/project/${id}`);
      return response.data;
    } catch {
      return null;
    }
  }

  static async getAll() {
    try {
      const response = await Request.get('/project');
      return response.data;
    } catch {
      return null;
    }
  }
}

export default Project;
