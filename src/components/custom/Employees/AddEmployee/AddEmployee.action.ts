import { Employee } from '../../../../reducers/Employees.reducer';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../../../../reducers/index.reducer';
import { post } from 'superagent';

export enum AddEmployeeActionTypes {
    ADD_EMPLOYEE_SUCCESS = 'ADD_EMPLOYEE_SUCCESS',
}

export interface AddEmployeeAction {
    type: AddEmployeeActionTypes;
    payload?: Employee;
}

/*<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const addEmployee: ActionCreator<ThunkAction<void, AppState, Employee, AddEmployeeAction>> = (
    newEmployee: Omit<Employee, 'id'>
) => {
    return async (dispatch: Dispatch) => {
        const response = (await post(`https://dummy.restapiexample.com/api/v1/create`).send(newEmployee)).body;
        if (response.status === 'success') {
            dispatch({
                type: AddEmployeeActionTypes.ADD_EMPLOYEE_SUCCESS,
                payload: response.data as Employee,
            });
        } else {
            throw new Error(response.message);
        }
    };
};
