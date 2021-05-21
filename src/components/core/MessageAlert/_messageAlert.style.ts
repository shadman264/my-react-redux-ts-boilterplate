import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        snackbar: {
            width: '50%',
        },
        alert: {
            width: '100%',
        },
    })
);
