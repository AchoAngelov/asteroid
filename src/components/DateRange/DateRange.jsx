import { useState } from 'react';
import moment from 'moment';
import Grid from '@mui/material/Grid';
import { getClosestAsteroids } from '../../services/asteroidsService';
import DatePicker from '../DatePicker/DatePicker';
import { LoadingButton } from '@mui/lab';
import { useAsteroidContext } from '../../context/asteroidsContext';
import styles from './DateRange.module.scss';
import { useSnackbar } from 'notistack';

function DateRange() {
    const asteroidsCtx = useAsteroidContext();
    const [loading, setLoading] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState();
    const { enqueueSnackbar } = useSnackbar();
    const getStartDate = (date) => {
        setStartDate(moment(date).format('YYYY-MM-DD'));
    };
    const getEndDate = (date) => {
        setEndDate(moment(date).format('YYYY-MM-DD'));
    };
    const getAsteroids = async (e) => {
        e.preventDefault();
        const data = {
            start_date: moment(startDate).format('YYYY-MM-DD'),
            end_date: moment(endDate).format('YYYY-MM-DD'),
        };
        try {
            setLoading(true);
            const response = await getClosestAsteroids(data);
            const keys = Object.keys(response.data.near_earth_objects);

            const asteroids = keys.map(
                (key) => response.data.near_earth_objects[key]
            );
            asteroidsCtx.setAsteroids(
                Array.prototype.concat.apply([], asteroids)
            );
        } catch (err) {
            enqueueSnackbar(
                err.response.data.error_message
                    ? err.response.data.error_message
                    : err.response.data.error.message,
                { variant: 'error' }
            );
            throw new Error(err);
        } finally {
            setLoading(false);
        }
    };

    function getDatesInRange() {
        const date = startDate.setDate() + 7;

        return date.set;
    }
    return (
        <>
            <Grid className={styles.dateRange} container>
                <Grid
                    item
                    md={12}
                    sx={{ pb: 2, mx: 'auto', textAlign: 'right' }}
                >
                    <DatePicker
                        value={startDate}
                        getDate={getStartDate}
                        label={'From'}
                    />
                </Grid>
                <Grid
                    item
                    md={12}
                    sx={{ pb: 2, mx: 'auto', textAlign: 'right' }}
                >
                    <DatePicker
                        shouldDisableDate={getDatesInRange}
                        value={endDate <= startDate ? startDate : endDate}
                        getDate={getEndDate}
                        label={'To'}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                        ml: 'auto',
                        alignItems: 'right',
                        display: 'flex',
                        pl: 0,
                    }}
                >
                    <LoadingButton
                        loading={loading}
                        loadingPosition="center"
                        variant="contained"
                        fullWidth
                        onClick={getAsteroids}
                    >
                        Check for asteroids
                    </LoadingButton>
                </Grid>
            </Grid>
        </>
    );
}

export default DateRange;
