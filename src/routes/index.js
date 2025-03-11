import HomePage from '~/pages/Home';
import Login from '~/pages/Login';
import SignIn from '~/pages/SignIn';
import Profile from '~/pages/Profile';
import { DefaultLayout } from '~/components/layouts';

const publicRoutes = [
    {
        path: '/login',
        component: Login,
        layout: DefaultLayout,
        title: '',
    },
    {
        path: '/signIn',
        component: SignIn,
        layout: DefaultLayout,
        title: '',
    },
    {
        path: '/profile',
        component: Profile,
        layout: DefaultLayout,
        title: '',
    },
];

const privateRoutes = [
    {
        path: '/',
        component: HomePage,
        layout: DefaultLayout,
        title: '',
    },
];

export { publicRoutes, privateRoutes };
