//import config
import config from '~/config';
// import layouts
import { DefaultLayout } from '~/layouts';
import { HeaderOnly } from '~/layouts';
// import pages
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import About from '~/pages/About';
// Routes for account no login
const publicRoutes = [
    { path: config.routes.home, component: Home, layout: DefaultLayout },
    { path: config.routes.profile, component: Profile, layout: DefaultLayout },
    { path: config.routes.following, component: Following, layout: DefaultLayout },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.about, component: About, layout: null },
];

// Routes for account login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
