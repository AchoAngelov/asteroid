import './App.scss';
import TabsPanel from './components/TabsPanel/TabsPanel';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import AsteroidPage from './pages/AsteroidPage';
import { useAsteroidContext } from './context/asteroidsContext';
import SearchForAsteroids from './components/SearchForAsteroids/SearchForAsteroids';

function AppRouter() {
    const { asteroids } = useAsteroidContext();

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Header />
                    {asteroids ? (
                        <TabsPanel
                            label={[
                                'Asteroids Table View',
                                'Asteroids Chart View',
                            ]}
                        />
                    ) : (
                        <SearchForAsteroids />
                    )}
                </Route>
                <Route path="/asteroid/:id">
                    <AsteroidPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;
