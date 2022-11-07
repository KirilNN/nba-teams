import { Game, ReducedTeamData, Series, Teams } from '../../import/import.interfaces';
import { VenueSelection } from '../explorer.interfaces';

export const reduceTeamData = (teams: Teams, selected: Array<string>, venue: VenueSelection): ReducedTeamData => {
    const series: Array<Series> = [];
    const categories = new Set<string>();

    selected.map((team: string) => {
        let data: Array<Game> = [];
        if (venue === VenueSelection.Home || venue === VenueSelection.Away) {
            data = teams[team][venue];
        } else {
            data = [...teams[team].away, ...teams[team].home];
        }

        const reducedData = data.map((s: Game) => {
            categories.add(s.date);
            return s.points;
        });
        series.push({ name: team, data: reducedData });
    });
    return {
        series,
        categories,
    };
};
