// Routes
import projectRoute from '../routes/project';
import technologiesRoute from '../routes/technologies';

type MainRoutesType = Array<[String, Object]>;

const mainRoutes: MainRoutesType = [
  ['/project', projectRoute.router],
  ['/tech', technologiesRoute.router],
];

export default mainRoutes;
