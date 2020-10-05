import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import NowPlaying from '../pages/NowPlaying';
import Search from '../pages/Search';
import Trending from '../pages/Trending';

const ROUTES = [
  {
    path: ['/'],
    key: 'HOME',
    exact: true,
    component: Home,
    auth: false,
  },
  {
    path: ['/search', '/s'],
    key: 'SEARCH',
    exact: true,
    component: Search,
    auth: false,
  },
  {
    path: ['/trending'],
    key: 'TRENDING',
    exact: true,
    component: Trending,
    auth: false,
  },
  {
    path: ['/now-playing'],
    key: 'NOW_PLANING',
    exact: true,
    component: NowPlaying,
    auth: false,
  },
  {
    name: 'Not Found',
    component: NotFound,
  },
];

export default ROUTES;
