import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        loading: {
            position: 'fixed',
            top: '47%',
            left: '48%',
        },
    })
);
