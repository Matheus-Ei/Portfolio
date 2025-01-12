// Pages
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';

type RoutesType = Array<[string, () => JSX.Element]>;

const routes: RoutesType = [
  ['/', Home],
  ['*', NotFound],
];

export default routes;
