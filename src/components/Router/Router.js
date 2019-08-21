import React, {PureComponent} from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
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
            <Switch>
                <PrivateRoute path="/search" component={Search} />
                <Route exact path="/" component={Login} />
            </Switch>
        )
    }
}

export default withRouter(Router)