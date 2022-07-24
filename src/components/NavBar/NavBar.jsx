import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useUserContext } from '../../context/userContext';
import { getTokenStorage, setTokenStorage } from '../../storage/token-storage';
import { useHistory } from 'react-router';

export default function NavBar() {
    const { user, setUser } = useUserContext();
    const history = useHistory();
    const logout = () => {
        setUser(undefined);
        setTokenStorage('');
        history.push('/login');
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            {(user || getTokenStorage()) && (
                <AppBar position="static">
                    <Toolbar>
                        <Button color="inherit" onClick={logout}>
                            Login
                        </Button>
                    </Toolbar>
                </AppBar>
            )}
        </Box>
    );
}
