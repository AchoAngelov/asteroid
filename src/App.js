import './App.scss';
import Layout from './layout/Layout';
import { AsteroidsProvider } from './context/asteroidsContext';
import AppRouter from './AppRouter';
function App() {
    return (
        <AsteroidsProvider>
            <Layout>
                <AppRouter />
            </Layout>
        </AsteroidsProvider>
    );
}

export default App;
