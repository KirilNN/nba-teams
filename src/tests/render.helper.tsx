import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { AppState } from '../../src/app/shared/store';
import { VenueSelection } from '../app/modules/explorer/explorer.interfaces';

export const renderWithProvider = (ui: React.ReactNode, state?: Partial<AppState>): JSX.Element => {
    const mockStore = configureMockStore();
    const store = mockStore({
        ...state,
        import: { teams: {} },
        explore: {
            selected: [],
            venue: VenueSelection.Both,
        },
    });

    return <Provider store={store}>{ui}</Provider>;
};
