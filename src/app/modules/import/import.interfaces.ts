import { importConstants } from './import.constants';

export type IValidationSchema = {
    csv: string;
};

export interface IFormValues {
    csv: string;
}

export interface IImportProps {
    submit: (values: IFormValues) => void;
}

export type Game = {
    date: string;
    points: number;
};

export type Team = {
    away: Array<Game>;
    home: Array<Game>;
};

export type Series = {
    name: string;
    data: Array<string | number>;
};

export type ReducedTeamData = {
    series: Array<Series>;
    categories: Set<string>;
};

export type Teams = Record<string, Team>;

export interface IImport {
    teams: Teams;
}

export interface ISubmit {
    type: typeof importConstants.SUBMIT;
    teams: Teams;
}

export type ImportActions = ISubmit;
