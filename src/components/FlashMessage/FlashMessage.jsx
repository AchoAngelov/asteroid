import * as React from 'react';
import Alert from '@mui/material/Alert';
import { Collapse } from '@mui/material';

export default function FlashMessage({ message, status }) {
    const [open, setOpen] = React.useState(true);
    React.useEffect(() => {
        if (message) setOpen(true);
    }, [message]);
    return (
        <Collapse in={open}>
            <Alert
                sx={{ mt: 3 }}
                severity={status}
                onClose={() => setOpen(false)}
            >
                {message}
            </Alert>
        </Collapse>
    );
}
