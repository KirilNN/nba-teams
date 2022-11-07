import { explorerConstants } from './explorer.constants';
import { VenueSelection } from './explorer.interfaces';
import { Dispatch } from 'redux';

const selectTeams = (values: Array<string>): ((dispatch: Dispatch) => void) => {
    return (dispatch: Dispatch): void => {
        dispatch({ type: explorerConstants.TEAM_SELECT, selected: values });
    };
};

const selectVenue = (venue: VenueSelection): ((dispatch: Dispatch) => void) => {
    return (dispatch: Dispatch): void => {
        dispatch({ type: explorerConstants.VENUE_SELECT, venue });
    };
};

export const explorerActions = {
    selectTeams,
    selectVenue,
};
