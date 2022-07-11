import { BrowserRouter, Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import AsteroidPage from './pages/AsteroidPage/AsteroidPage';
import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';

function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/asteroid/:id">
                    <AsteroidPage />
                </Route>
                <Route path="/auth" exact>
                    <AuthPage />
                </Route>
                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;
