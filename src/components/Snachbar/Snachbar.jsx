import React from 'react';
import { SnackbarProvider } from 'notistack';

export default function Snackbar(props) {
    return <SnackbarProvider maxSnack={3}>{props.children}</SnackbarProvider>;
}
