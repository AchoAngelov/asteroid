import { BrowserRouter, Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useUserContext } from './context/userContext';

import AsteroidPage from './pages/AsteroidPage/AsteroidPage';
import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';
import { getTokenStorage } from './storage/token-storage';

function AppRouter() {
    const token = getTokenStorage();
    const { user } = useUserContext();
    return (
        <BrowserRouter>
            <Switch>
                {(token || user) && (
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                )}
                {(token || user) && (
                    <Route path="/asteroid/:id">
                        <AsteroidPage />
                    </Route>
                )}
                {!token && (
                    <Route path="/login" exact>
                        <AuthPage login={true} />
                    </Route>
                )}
                {!token && (
                    <Route path="/register" exact>
                        <AuthPage login={false} />
                    </Route>
                )}
                <Redirect from="*" to={token || user ? '/' : 'login'} />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;
