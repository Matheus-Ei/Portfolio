// Pages
import NotFound from 'pages/NotFound';

type RoutesType = Array<[string, () => JSX.Element]>;

const routes: RoutesType = [['*', NotFound]];

export default routes;
