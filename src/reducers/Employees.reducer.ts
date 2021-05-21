import {
    EmployeesTableActionTypes,
    EmployeesTableAction,
    RawEmployeesData,
} from '../components/custom/Employees/EmployeesTable/EmployeesTable.action';
import { Reducer } from 'redux';
import {
    AddEmployeeAction,
    AddEmployeeActionTypes,
} from '../components/custom/Employees/AddEmployee/AddEmployee.action';

export interface Employee {
    id: number;
    name: string;
    salary: number;
    age: number;
}

export interface EmployeesState extends Array<Employee> {}

const initialState: EmployeesState = [];

export type EmployeesAction = EmployeesTableAction | AddEmployeeAction;

export const EmployeesReducer: Reducer<EmployeesState, EmployeesAction> = (state = initialState, action) => {
    switch (action.type) {
        case EmployeesTableActionTypes.GET_EMPLOYEES_DATA_REQUEST:
            return state;
        case EmployeesTableActionTypes.GET_EMPLOYEES_DATA_SUCCESS:
            return formatEmployeesData(action.payload as RawEmployeesData['data']);
        case EmployeesTableActionTypes.GET_EMPLOYEES_DATA_FAILURE:
            return state;
        case AddEmployeeActionTypes.ADD_EMPLOYEE_SUCCESS:
            const combinedEmployeesList: EmployeesState = [...state, action.payload as Employee];
            return combinedEmployeesList;
        default:
            return state;
    }
};

const formatEmployeesData = (data: RawEmployeesData['data']): EmployeesState => {
    return data.map((employee) => ({
        id: employee.id,
        name: employee.employee_name,
        salary: employee.employee_salary,
        age: employee.employee_age,
    }));
};
