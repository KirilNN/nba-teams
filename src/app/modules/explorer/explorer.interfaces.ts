import { explorerConstants } from './explorer.constants';

export interface IExplorerProps {
    select: (values: Array<string>) => void;
    selectVenue: (venue: VenueSelection) => void;
}

export enum VenueSelection {
    Home = 'home',
    Away = 'away',
    Both = 'both',
}

export interface ISelect {
    type: typeof explorerConstants.TEAM_SELECT;
    selected: Array<string>;
}

export interface IVenue {
    type: typeof explorerConstants.VENUE_SELECT;
    venue: VenueSelection;
}

export interface IExplorer {
    selected: Array<string>;
    venue: VenueSelection;
}

export type ExplorerActions = ISelect & IVenue;
