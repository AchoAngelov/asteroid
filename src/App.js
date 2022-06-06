import './App.css';
import Layout from './layout/Layout';
import TabsPanel from './components/TabsPanel/TabsPanel';
import Header from './components/Header/Header';
import { AsteroidsProvider } from './context/asteroidsContext';
function App() {
    return (
        <AsteroidsProvider>
            <Layout>
                <Header />
                <TabsPanel label={['Asteroids Table', 'Chart View']} />
            </Layout>
        </AsteroidsProvider>
    );
}

export default App;
