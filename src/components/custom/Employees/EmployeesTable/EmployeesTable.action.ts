import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { get } from 'superagent';
import { AppState } from '../../../../reducers/index.reducer';

export enum EmployeesTableActionTypes {
    GET_EMPLOYEES_DATA_REQUEST = 'GET_EMPLOYEES_DATA_REQUEST',
    GET_EMPLOYEES_DATA_SUCCESS = 'GET_EMPLOYEES_DATA_SUCCESS',
    GET_EMPLOYEES_DATA_FAILURE = 'GET_EMPLOYEES_DATA_FAILURE',
}

export interface RawEmployeesData {
    status: string;
    data: {
        id: number;
        employee_name: string;
        employee_salary: number;
        employee_age: number;
        profile_image: string;
    }[];
    message: string;
}

export interface EmployeesTableAction {
    type: EmployeesTableActionTypes;
    payload?: RawEmployeesData['data'];
}

/*<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getEmployeesData: ActionCreator<ThunkAction<void, AppState, void, EmployeesTableAction>> = () => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: EmployeesTableActionTypes.GET_EMPLOYEES_DATA_REQUEST,
        });
        try {
            // Fetch data here
            const response: RawEmployeesData = (await get('https://dummy.restapiexample.com/api/v1/employees')).body;

            if (response.status === 'success') {
                dispatch({
                    type: EmployeesTableActionTypes.GET_EMPLOYEES_DATA_SUCCESS,
                    payload: response.data,
                });
            } else {
                throw new Error(response.message);
            }
        } catch (err) {
            console.error('Failed to fetch data', err.message || err);
            dispatch({
                type: EmployeesTableActionTypes.GET_EMPLOYEES_DATA_FAILURE,
            });
        }
    };
};
