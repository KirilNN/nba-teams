import { combineReducers } from 'redux';
import { importReducer } from '../../modules/import/import.reducer';
import { explorerReducer } from '../../modules/explorer/explorer.reducer';

export default combineReducers({
    import: importReducer,
    explore: explorerReducer,
});
