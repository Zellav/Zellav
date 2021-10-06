import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes';
import {HOME_ROUTE, ADMIN_ROUTE} from '../utils/path'

const GlobalRouter = () => {
    const user = false
    return user ?
        (
            <Switch>
                {privateRoutes.map(({ path, Component }) =>
                    <Route path={path} component={Component} exact={true} />
                )}
                <Redirect to={ADMIN_ROUTE} />
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({ path, Component }) =>
                    <Route path={path} component={Component} exact={true} />
                )}
                <Redirect to={HOME_ROUTE} />
            </Switch>

        )
};

export default GlobalRouter;

