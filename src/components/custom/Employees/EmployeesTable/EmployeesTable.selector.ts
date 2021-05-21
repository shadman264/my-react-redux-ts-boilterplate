import { AppState } from '../../../../reducers/index.reducer';
import { createSelector } from 'reselect';

export const selectEmployeesState = (state: AppState) => state.employees;
export const selectEmployees = createSelector(selectEmployeesState, (employees) => employees);
