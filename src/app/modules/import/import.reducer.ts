import { importConstants } from './import.constants';
import { ImportActions, IImport } from './import.interfaces';

const initialState: IImport = { teams: {} };

const importReducer = (state = initialState, action: ImportActions): IImport => {
    switch (action.type) {
        case importConstants.SUBMIT:
            return {
                ...state,
                teams: action.teams,
            };

        default:
            return state;
    }
};

export { importReducer };
