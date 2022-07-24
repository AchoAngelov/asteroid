import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useUserContext } from '../../context/userContext';
import { Link, useHistory } from 'react-router-dom';
import { signIn, signUp } from '../../services/userService';
import { setTokenStorage } from '../../storage/token-storage';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';

const theme = createTheme();

export default function AuthForm(props) {
    const { setUser } = useUserContext();
    const history = useHistory();
    const { enqueueSnackbar } = useSnackbar();
    const [password, setPassword] = React.useState();
    const [confirmPassword, setConfirmPassword] = React.useState();
    const [valid, setValid] = React.useState(true);
    // useEffect(() => {
    //     if (password >= 6) {
    //         setValid(password === confirmPassword);
    //     }
    // }, [password, confirmPassword]);
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const mode = !props.login ? signUp : signIn;
        mode({ email: data.get('email'), password: data.get('password') })
            .then((response) => {
                setUser(response.data);
                setTokenStorage(response.data.idToken);
                history.push('/');
            })
            .catch((err) => {
                enqueueSnackbar(
                    err.response.data.error_message
                        ? err.response.data.error_message
                        : err.response.data.error.message,
                    { variant: 'error' }
                );
            });
    };
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        {props.login ? 'Sign in' : 'Sign up'}
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            error={!valid}
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            onBlur={() => setValid(true)}
                        />
                        {!props.login && (
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                id="confirm-password"
                                error={!valid}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                }}
                            />
                        )}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {props.login ? 'Sign in' : 'Sign up'}
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link
                                    to={props.login ? '/register' : '/login'}
                                    variant="body2"
                                >
                                    {props.login
                                        ? "Don't have an account? Sign Up"
                                        : 'Already have an account? Sign in'}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
