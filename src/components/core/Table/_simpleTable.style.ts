import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        table: {
            minWidth: 650,
        },
        alert: {
            position: 'fixed',
            bottom: '3%',
            right: '31%',
            width: '35%',
        },
    })
);
