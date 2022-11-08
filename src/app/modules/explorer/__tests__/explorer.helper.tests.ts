import { Teams } from '../../import/import.interfaces';
import { VenueSelection } from '../explorer.interfaces';
import { reduceTeamData } from '../utils/explorer.helper';

const teamsData: Teams = {
    Nicks: {
        home: [{ date: '11/11/2011', points: 100 }],
        away: [{ date: '11/12/2011', points: 110 }],
    },
    Hawks: {
        home: [{ date: '11/14/2011', points: 120 }],
        away: [{ date: '11/15/2011', points: 130 }],
    },
};

test('returns default values when no teams', () => {
    const result = reduceTeamData({}, [], null);
    expect(result).toEqual({ categories: new Set(), series: [] });
});

test('returns teams away points only', () => {
    const result = reduceTeamData(teamsData, ['Nicks'], VenueSelection.Away);
    expect(result).toEqual({ categories: new Set(['11/12/2011']), series: [{ data: [110], name: 'Nicks' }] });
});

test('returns teams home points only', () => {
    const result = reduceTeamData(teamsData, ['Nicks'], VenueSelection.Home);
    expect(result).toEqual({ categories: new Set(['11/11/2011']), series: [{ data: [100], name: 'Nicks' }] });
});

test('returns teams all games points', () => {
    const result = reduceTeamData(teamsData, ['Nicks'], VenueSelection.Both);
    expect(result).toEqual({
        categories: new Set(['11/12/2011', '11/11/2011']),
        series: [{ data: [110, 100], name: 'Nicks' }],
    });
});

test('returns multiple teams away points only', () => {
    const result = reduceTeamData(teamsData, ['Nicks', 'Hawks'], VenueSelection.Away);
    expect(result).toEqual({
        categories: new Set(['11/12/2011', '11/15/2011']),
        series: [
            { data: [110], name: 'Nicks' },
            { data: [130], name: 'Hawks' },
        ],
    });
});

test('returns multiple teams home points only', () => {
    const result = reduceTeamData(teamsData, ['Nicks', 'Hawks'], VenueSelection.Home);
    expect(result).toEqual({
        categories: new Set(['11/11/2011', '11/14/2011']),
        series: [
            { data: [100], name: 'Nicks' },
            { data: [120], name: 'Hawks' },
        ],
    });
});

test('returns multiple teams all games points', () => {
    const result = reduceTeamData(teamsData, ['Nicks', 'Hawks'], VenueSelection.Both);
    expect(result).toEqual({
        categories: new Set(['11/12/2011', '11/11/2011', '11/15/2011', '11/14/2011']),
        series: [
            { data: [110, 100], name: 'Nicks' },
            { data: [130, 120], name: 'Hawks' },
        ],
    });
});
