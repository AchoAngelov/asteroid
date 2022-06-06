import { useState } from 'react';
import moment from 'moment';
import Grid from '@mui/material/Grid';
import { getClosestAsteroids } from '../../services/asteroidsService';
import DatePicker from '../DatePicker/DatePicker';
import { LoadingButton } from '@mui/lab';
import { useAsteroidContext } from '../../context/asteroidsContext';
function DateRange() {
    const asteroidsCtx = useAsteroidContext();
    const [loading, setLoading] = useState(false);
    const [startDate, setStartDate] = useState(
        moment(new Date()).format('YYYY-MM-DD')
    );
    const [endDate, setEndDate] = useState(
        moment(new Date()).format('YYYY-MM-DD')
    );
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
            asteroidsCtx.setAsteroids(...asteroids);
        } catch (err) {
            throw new Error(err);
        } finally {
            setLoading(false);
        }
        console.log(asteroidsCtx.asteroids);
    };
    return (
        <Grid container spacing={3}>
            <Grid item xs={6} md={4} sx={{ mx: 'auto' }}>
                <DatePicker
                    value={startDate}
                    getDate={getStartDate}
                    label={'Start Date'}
                />
            </Grid>
            <Grid item xs={6} md={4} sx={{ mx: 'auto' }}>
                <DatePicker getDate={getEndDate} label={'End Date'} />
            </Grid>
            <Grid
                item
                xs={8}
                md={3}
                sx={{ mx: 'auto', alignItems: 'center', display: 'flex' }}
            >
                <LoadingButton
                    loading={loading}
                    loadingPosition="center"
                    fullWidth
                    variant="contained"
                    onClick={getAsteroids}
                >
                    Get Asteroids
                </LoadingButton>
            </Grid>
        </Grid>
    );
}

export default DateRange;
