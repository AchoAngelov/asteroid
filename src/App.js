import './App.scss';
import Layout from './layout/Layout';
import { AsteroidsProvider } from './context/asteroidsContext';
import AppRouter from './AppRouter';
import Snackbar from './components/Snachbar/Snachbar';
function App() {
    return (
        <Snackbar>
            <AsteroidsProvider>
                <Layout>
                    <AppRouter />
                </Layout>
            </AsteroidsProvider>
        </Snackbar>
    );
}

export default App;
