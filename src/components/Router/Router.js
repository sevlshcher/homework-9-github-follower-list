import React, {PureComponent} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../Login'
import Search from '../Search'
import PrivateRoute from '../PrivateRoute'

// Реализуйте роутер

// Роутер должен иметь роуты для компонентов Login и Search
// Вам потребуется использовать PrivateRoute для Search
// По умолчанию нужно перенаправлять на страницу логина

class Router extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <PrivateRoute path="/search" component={Search} />
                    <Route exact path="/" component={Login} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router