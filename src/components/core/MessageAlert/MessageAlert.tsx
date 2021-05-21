import { Snackbar } from '@material-ui/core';
import { Alert, Color } from '@material-ui/lab';
import React, { useState } from 'react';
import { useStyles } from './_messageAlert.style';

export interface MessageAlertProps {
    message: string;
    severity?: Color;
}
export const MessageAlert: React.FunctionComponent<MessageAlertProps> = (props: MessageAlertProps) => {
    const { message, severity } = props;
    const [open, setOpen] = useState(true);
    const classes = useStyles();
    return (
        <Snackbar open={open} autoHideDuration={5000} onClose={() => setOpen(false)} className={classes.snackbar}>
            <Alert severity={severity} onClose={() => setOpen(false)} className={classes.alert}>
                {message}
            </Alert>
        </Snackbar>
    );
};
