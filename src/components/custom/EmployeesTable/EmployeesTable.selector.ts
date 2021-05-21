import { AppState } from '../../../reducers/index.reducer';

export const selectEmployees = (state: AppState) => state.employees;
