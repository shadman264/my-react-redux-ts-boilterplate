import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from './_loading';

export const Loading: React.FunctionComponent = () => {
    const classes = useStyles();
    return <CircularProgress className={classes.loading} />;
};
