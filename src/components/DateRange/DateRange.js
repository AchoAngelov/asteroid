import { useState } from 'react';
import moment from 'moment'
import Grid from '@mui/material/Grid';
import { getClosestAsteroids } from '../../services/asteroidsService';
import DatePicker from '../DatePicker/DatePicker';
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
function DateRange() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const getStartDate = (date) => {
    setStartDate(date);
  };
  const getEndDate = (date) => {
    setEndDate(date);
  }
  const getAsteroids = (e)=>{
    e.preventDefault();
    const data = {
        start_date: moment(startDate).format('YYYY-MM-DD'), 
        end_date: moment(endDate).format('YYYY-MM-DD')
    }
    getClosestAsteroids(data);
  }
  return (
    <Grid container spacing={4}>
        <Grid item xs={6} sx={{mx:'auto'}}>
            <DatePicker value={startDate} getDate={getStartDate} label={'Start Date'}/>
        </Grid>
        <Grid item xs={6} sx={{mx:'auto'}}>
            <DatePicker getDate={getEndDate} label={'End Date'}/>
        </Grid>
        <Grid item xs={8} sx={{mx:'auto'}}>
            <LoadingButton
                loading={false}
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
