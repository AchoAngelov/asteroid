import {
    AppBar,
    Box,
    Grid,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createRowData, round } from '../../common/common';
import EnhancedTable from '../../components/EnhancedTable/EnhancedTable';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getAsteroid } from '../../services/asteroidsService';
import styles from './AsteroidPage.module.scss';
import { Link } from 'react-router-dom';

export default function AsteroidPage() {
    const [asteroid, setAsteroid] = useState([]);
    const [loading, setLoading] = useState(false);
    const [asteroidName, setAsteroidName] = useState();
    const params = useParams();
    const headCells = [
        {
            id: 0,
            numeric: false,
            disablePadding: true,
            label: 'Close approach date',
        },
        {
            id: 1,
            numeric: false,
            disablePadding: false,
            label: 'Distance To Earth (km)',
        },
    ];
    const getAsteroidData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await getAsteroid(params.id);
            setAsteroid(() => {
                setLoading(false);
                setAsteroidName(response.data.name);
                const dataArray = response.data.close_approach_data.map(
                    (data) => {
                        return [
                            data.close_approach_date_full,
                            round(data.miss_distance.kilometers),
                        ];
                    }
                );
                return dataArray.map((data) => createRowData(data));
            });
        } catch (err) {
            throw new Error(err);
        } finally {
        }
    }, [params.id]);

    useEffect(() => {
        getAsteroidData();
    }, [getAsteroidData]);
    return !loading ? (
        <Box
            container
            spacing={4}
            className={styles.asteroidPage}
            sx={{ mt: 0 }}
        >
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Link to="/">
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                    </Link>

                    <Typography variant="h6" color="inherit" component="div">
                        {asteroidName}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid item xs={12}>
                <EnhancedTable
                    rowsHandler={() => {}}
                    rows={asteroid}
                    headCells={headCells}
                />
            </Grid>
        </Box>
    ) : (
        <div></div>
    );
}
