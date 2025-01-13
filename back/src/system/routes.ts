// Routes
import projectRoute from '../routes/project';
import programmingLanguageRoute from '../routes/programmingLanguage';

type MainRoutesType = Array<[String, Object]>;

const mainRoutes: MainRoutesType = [
  ['/project', projectRoute.router],
  ['/programming-language', programmingLanguageRoute.router],
];

export default mainRoutes;
