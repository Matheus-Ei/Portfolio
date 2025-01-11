// Services connects the frontend with the backend

// Local
import Request from 'modules/Request';

class Service {
  static async get() {
    try {
      const response = await Request.get('/');
      return response.data;
    } catch {
      return null;
    }
  }
}

export default Service;
