import {lazy} from 'react';

const Home = lazy(() => import(/* webpackChunkName: 'Home' */ './pages/Home'));
const PastArticles = lazy(() => import(/* webpackChunkName: 'PastArticles' */ './pages/PastArticles'));
const AboutAuthor = lazy(() => import(/* webpackChunkName: 'PastArticles' */ './pages/AboutAuthor'));

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/past-articles',
        component: PastArticles,
        exact: true
    },
    {
        path: '/about-author',
        component: AboutAuthor,
        exact: true
    },
];

export default routes;
