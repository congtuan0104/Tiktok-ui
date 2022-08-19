// import layouts
import { DefaultLayout } from '~/layouts';
import { HeaderOnly } from '~/layouts';
// import pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import About from '~/pages/About';
// Routes for account no login
const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/following', component: Following, layout: DefaultLayout },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/about', component: About, layout: null },
];

// Routes for account login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
