import {LOGIN_ROUTE, HOME_ROUTE, ADMIN_ROUTE, CREATE_ROUTE, UPDATE_ROUTE} from './utils/path'
import Login from './components/login/Login'
import Home from './components/Home'
import Admin from './components/admin/Admin'
import Create from './components/Create'
import Update from './components/Update'

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: HOME_ROUTE,
        Component: Home
    }
]

export const privateRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CREATE_ROUTE,
        Component: Create
    },
    {
        path: UPDATE_ROUTE,
        Component: Update
    },
]