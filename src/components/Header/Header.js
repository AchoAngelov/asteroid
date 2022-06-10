import React from 'react';
import { Grid, Typography } from '@mui/material';
import DateRange from '../DateRange/DateRange';
import styles from './Header.module.scss';

export default function Header({ children }) {
    return (
        <Grid container className={styles.header} alignItems={'end'}>
            <Grid item>
                <DateRange />
            </Grid>
        </Grid>
    );
}
