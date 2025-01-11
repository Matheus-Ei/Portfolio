// Pages
import Dashboard from 'pages/Dashboard';
import NotFound from 'pages/NotFound';

type RoutesType = Array<[string, () => JSX.Element]>;

const routes: RoutesType = [
  ['/', Dashboard],
  ['*', NotFound],
];

export default routes;
