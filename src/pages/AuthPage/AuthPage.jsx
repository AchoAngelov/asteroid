import { Box } from '@mui/material';
import AuthForm from '../../components/AuthForm/AuthForm';
import styles from './AuthPage.module.scss';

function AuthPage(props) {
    return (
        <Box className={styles.AuthPage}>
            <AuthForm login={props.login} />
        </Box>
    );
}

export default AuthPage;
