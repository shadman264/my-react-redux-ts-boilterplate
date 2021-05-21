import { Grid } from '@material-ui/core';
import React from 'react';
import { EmployeesTable } from './components/custom/Employees/EmployeesTable/EmployeesTable.component';
import { useStyles } from './_app.style';

function App() {
    const classes = useStyles();
    return (
        <Grid container direction="row" justify="center" alignItems="center" spacing={1} className={classes.root}>
            <EmployeesTable />
        </Grid>
    );
}

export default App;
