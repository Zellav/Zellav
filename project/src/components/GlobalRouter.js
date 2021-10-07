import React, {useContext} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes';
import {HOME_ROUTE, ADMIN_ROUTE} from '../utils/path'
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";

const GlobalRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return user ?
        (
            <Switch>
                {privateRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} component={Component} exact={true} />
                )}
                <Redirect to={ADMIN_ROUTE} />
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} component={Component} exact={true} />
                )}
                <Redirect to={HOME_ROUTE} />
            </Switch>

        )
};

export default GlobalRouter;

