import './App.scss';
import Layout from './layout/Layout';
import { AsteroidsProvider } from './context/asteroidsContext';
import AppRouter from './AppRouter';
import Snackbar from './components/Snachbar/Snachbar';
import { UserProvider } from './context/userContext';
import NavBar from './components/NavBar/NavBar';
function App() {
    return (
        <Snackbar>
            <UserProvider>
                <AsteroidsProvider>
                    <Layout>
                        <NavBar />
                        <AppRouter />
                    </Layout>
                </AsteroidsProvider>
            </UserProvider>
        </Snackbar>
    );
}

export default App;
