import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutBasic from '../layouts/LayoutBasic';

//Admin Pages
import AdminHome from '../pages/Admin';
import AdminSignIn from '../pages/Admin/SignIn';

//User Pages
import Home from '../pages/Home';
import Contact from '../pages/Contact';

//Other
import Error404 from '../pages/Error404';

const routes = [
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false, 
        routes: [
            {
                path: "/admin",
                component: AdminHome,
                exact: true
            }, 
            {
                path: "/admin/login",
                component: AdminSignIn, 
                exact: true
            }
        ]
    },

    {
        path: "/",
        component: LayoutBasic,
        exact: false, 
        routes: [
            {
                path: "/home",
                component: Home,
                exact: true
            }, 
            {
                path: "/contact",
                component: Contact, 
                exact: true
            }
        ]
    },

    {
        component: Error404,
        exact: false
    }
];

export default routes;