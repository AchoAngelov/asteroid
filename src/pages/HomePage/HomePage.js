import { Fragment } from 'react';
import TabsPanel from '../../components/TabsPanel/TabsPanel';
import Header from '../../components/Header/Header';
import { useAsteroidContext } from '../../context/asteroidsContext';
import SearchForAsteroids from '../../components/SearchForAsteroids/SearchForAsteroids';

function HomePage() {
    const { asteroids } = useAsteroidContext();

    return (
        <Fragment>
            <Header />
            {asteroids ? (
                <TabsPanel
                    label={['Asteroids Table View', 'Asteroids Chart View']}
                />
            ) : (
                <SearchForAsteroids />
            )}
        </Fragment>
    );
}

export default HomePage;
