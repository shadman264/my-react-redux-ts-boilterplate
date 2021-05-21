import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './_simpleTable.style';

export interface TableRow {
    id: number;
    name: string;
    salary: number;
    age: number;
}

export interface TableProps {
    tableData: TableRow[];
}

export const SimpleTable: React.FunctionComponent<TableProps> = (props: TableProps) => {
    const { tableData } = props;
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            {tableData.length > 0 && (
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Age</TableCell>
                            <TableCell align="right">Salary</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((row: TableRow) => (
                            <TableRow key={row.id}>
                                <TableCell align="center">{row.id}</TableCell>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">{row.age}</TableCell>
                                <TableCell align="right">{row.salary}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </TableContainer>
    );
};
