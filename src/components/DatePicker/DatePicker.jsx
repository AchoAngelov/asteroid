import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers/DatePicker';
import styles from './DatePicker.module.scss';

export default function DatePicker({
    label,
    value,
    getDate,
    loading,
    minDate,
    shouldDisableDate,
}) {
    const color = ' rgb(220, 212, 212)';

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MUIDatePicker
                // shouldDisableDate={shouldDisableDate}
                label={label}
                value={value}
                loading={loading}
                helperText={'test'}
                onChange={(newValue) => {
                    getDate(newValue);
                }}
                renderInput={(params) => (
                    <TextField
                        className={styles.datePicker}
                        sx={{
                            svg: { color },
                            input: { color },
                            label: { color },
                        }}
                        {...params}
                    />
                )}
            />
        </LocalizationProvider>
    );
}
