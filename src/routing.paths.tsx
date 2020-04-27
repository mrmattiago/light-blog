import {lazy} from 'react';

const Home = lazy(() => import(/* webpackChunkName: 'Home' */ './pages/Home'));

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
];

export default routes;
