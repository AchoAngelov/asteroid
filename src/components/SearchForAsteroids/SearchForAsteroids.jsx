import React from 'react';
import { AppBar, Box, Typography } from '@mui/material';
import styles from './SearchForAsteroids.module.scss';

export default function SearchForAsteroids() {
    return (
        <>
            <AppBar position="static">
                <Typography variant={'h5'} textAlign="center" sx={{ p: 1 }}>
                    Аre we safe?
                </Typography>
            </AppBar>
            <Box className={styles.searchForAsteroids}>
                <Typography variant={'h4'}>
                    You can select two dates with an interval of maximum 7 days
                    and check for asteroids passing close to Earth
                </Typography>
            </Box>
        </>
    );
}
