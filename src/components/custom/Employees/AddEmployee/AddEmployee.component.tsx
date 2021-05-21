import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useStyles } from './_addEmployee.style';
import AddIcon from '@material-ui/icons/Add';
import { addEmployee } from './AddEmployee.action';
import { Employee } from '../../../../reducers/Employees.reducer';
import { useDispatch } from 'react-redux';
import { MessageAlert } from '../../../core/MessageAlert/MessageAlert';
import { Color } from '@material-ui/lab';
import { Loading } from '../../../core/Loading/Loading';

export const AddEmployee: React.FunctionComponent = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [displayAlert, setDisplayAlert] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [name, setName] = useState('');
    const [salary, setSalary] = useState(NaN);
    const [age, setAge] = useState(NaN);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('success' as Color);
    const [isLoading, setIsLoading] = useState(false);

    // to disable/enable submit button
    useEffect(() => {
        if (name !== '' && !isNaN(salary) && !isNaN(age)) {
            setSubmitDisabled(false);
        } else {
            setSubmitDisabled(true);
        }
    }, [name, salary, age]);

    const handleSubmit = async () => {
        const newEmployee: Omit<Employee, 'id'> = {
            name,
            salary,
            age,
        };
        setSubmitDisabled(true);
        setIsLoading(true);
        try {
            await dispatch(addEmployee(newEmployee));
            setSeverity('success' as Color);
            setMessage('Added new Employee Successfully!!');
        } catch (e) {
            setMessage('Failed to add new Employee');
            setSeverity('error');
        } finally {
            setDisplayAlert(true);
            setIsLoading(false);
            setOpen(false);
        }
    };
    const dialogContent = isLoading ? (
        <Loading />
    ) : (
        <React.Fragment>
            <DialogTitle id="form-dialog-title">Create Employee</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="salary"
                    label="Salary"
                    type="number"
                    fullWidth
                    onChange={(e) => setSalary(parseFloat(e.target.value))}
                />
                <TextField
                    margin="dense"
                    id="age"
                    label="Age"
                    type="number"
                    fullWidth
                    onChange={(e) => setAge(parseFloat(e.target.value))}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit} color="primary" disabled={submitDisabled}>
                    Submit
                </Button>
            </DialogActions>
        </React.Fragment>
    );
    return (
        <React.Fragment>
            <Fab color="primary" aria-label="add" className={classes.fab} onClick={() => setOpen(true)}>
                <AddIcon />
            </Fab>
            {displayAlert && <MessageAlert severity={severity} message={message} />}
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="form-dialog-title"
                disableBackdropClick
                disableEscapeKeyDown
            >
                {dialogContent}
            </Dialog>
        </React.Fragment>
    );
};
