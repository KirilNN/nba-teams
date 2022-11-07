import { importConstants } from './import.constants';
import { Dispatch } from 'redux';
import { parseCSV } from './utils/action.helpers';
import { IFormValues } from './import.interfaces';

const submit = (values: IFormValues): ((dispatch: Dispatch) => void) => {
    return (dispatch: Dispatch): void => {
        const data = parseCSV(values.csv);
        dispatch({ type: importConstants.SUBMIT, teams: data });
    };
};

export const importActions = {
    submit,
};
