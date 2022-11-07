import { explorerConstants } from './explorer.constants';
import { ExplorerActions, IExplorer, VenueSelection } from './explorer.interfaces';

const initialState: IExplorer = { selected: [], venue: VenueSelection.Home };

const explorerReducer = (state = initialState, action: ExplorerActions): IExplorer => {
    switch (action.type) {
        case explorerConstants.TEAM_SELECT:
            return {
                ...state,
                selected: action.selected,
            };

        case explorerConstants.VENUE_SELECT:
            return {
                ...state,
                venue: action.venue,
            };
        default:
            return state;
    }
};

export { explorerReducer };
