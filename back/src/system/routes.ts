// Routes
import projectRoute from '../routes/project';

type MainRoutesType = Array<[String, Object]>;

const mainRoutes: MainRoutesType = [['/project', projectRoute.router]];

export default mainRoutes;
