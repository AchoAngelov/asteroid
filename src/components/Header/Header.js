import React from 'react';
import { Box } from '@mui/material';
import DateRange from '../DateRange/DateRange';
import styles from './Header.module.scss'; 

export default function Header({children}){
    return (<Box className={styles.header}>
                <DateRange/>
            </Box>);
}
