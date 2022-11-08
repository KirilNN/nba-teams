import { explorerConstants } from '../explorer.constants';
import { VenueSelection } from '../explorer.interfaces';
import { explorerReducer as reducer } from '../explorer.reducer';

test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined, selected: undefined, venue: undefined })).toEqual({
        selected: [],
        venue: VenueSelection.Home,
    });
});

test('should handle team selection', () => {
    expect(
        reducer(undefined, { type: explorerConstants.TEAM_SELECT, selected: ['NY'], venue: VenueSelection.Away }),
    ).toEqual({
        selected: ['NY'],
        venue: VenueSelection.Home,
    });
});

test('should handle venue selection selection', () => {
    expect(
        reducer(undefined, { type: explorerConstants.VENUE_SELECT, selected: [], venue: VenueSelection.Both }),
    ).toEqual({
        selected: [],
        venue: VenueSelection.Both,
    });
});
