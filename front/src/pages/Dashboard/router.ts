// Local
import { ElementType } from 'types/global';

// Pages
import Home from './Tabs/Home';

type routeType = Array<{ title: string; page: () => ElementType }>;

const routes: routeType = [
  { title: 'Home', page: Home },
  { title: 'About', page: Home },
  { title: 'Projects', page: Home },
];

export default routes;
