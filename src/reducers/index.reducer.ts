import { combineReducers } from 'redux';
import { EmployeesState, EmployeesReducer } from './Employees.reducer';

// Create an interface for the application state
export interface AppState {
    employees: EmployeesState;
}

// Create the root reducer
export const rootReducer = combineReducers<AppState>({
    employees: EmployeesReducer,
});
