import React, { useEffect, useState } from 'react';
import { SimpleTable } from '../../../core/Table/SimpleTable';
import { Loading } from '../../../core/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeesData } from './EmployeesTable.action';
import { selectEmployees } from './EmployeesTable.selector';
import { Grid } from '@material-ui/core';
import { AddEmployee } from '../AddEmployee/AddEmployee.component';
import { MessageAlert } from '../../../core/MessageAlert/MessageAlert';
import { Color } from '@material-ui/lab';

export interface EmployeesTableProps {}
export const EmployeesTable: React.FunctionComponent<EmployeesTableProps> = (props: EmployeesTableProps) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    const employeesTableData = useSelector(selectEmployees);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getEmployeesData());
            setIsLoading(false);
        };
        fetchData();
    }, [dispatch]);

    let containerData = null;
    if (isLoading) {
        containerData = <Loading />;
    } else {
        if (employeesTableData.length === 0) {
            containerData = <MessageAlert severity={'error' as Color} message="No Data Found!!" />;
        } else {
            containerData = (
                <React.Fragment>
                    <SimpleTable tableData={employeesTableData} />
                    <AddEmployee />
                </React.Fragment>
            );
        }
    }

    return (
        <Grid item xs={12}>
            {containerData}
        </Grid>
    );
};
