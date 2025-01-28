// Routes
import projectRoute from '../routes/project';
import technologyRoute from '../routes/technology';

type MainRoutesType = Array<[String, Object]>;

const mainRoutes: MainRoutesType = [
  ['/project', projectRoute.router],
  ['/technology', technologyRoute.router],
];

export default mainRoutes;
