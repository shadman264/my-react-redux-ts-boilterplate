import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fab: {
            position: 'fixed',
            bottom: theme.spacing(3),
            right: theme.spacing(3),
        },
    })
);
