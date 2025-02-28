import HomePage from '~/pages/Home';
import Home2 from '~/pages/Page2';
import { DefaultLayoutAdmin } from '~/components/layouts';
import { DefaultLayoutClient } from '~/components/layouts';

const publicRoutes = [
    {
        path: '/home',
        component: Home2,
        layout: DefaultLayoutAdmin,
        title: '',
    },
];

const privateRoutes = [
    {
        path: '/',
        component: HomePage,
        layout: DefaultLayoutClient,
        title: '',
    },
];

export { publicRoutes, privateRoutes };
