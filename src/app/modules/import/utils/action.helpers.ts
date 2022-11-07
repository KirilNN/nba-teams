import { Teams } from '../import.interfaces';
import * as CSV from 'csv-string';

const getItemAtIndex = (arr: Array<string>, index: number) => {
    if (arr[index] !== undefined) {
        return arr[index];
    }
    return '';
};

export const parseCSV = (csv: string): Teams => {
    const csvArray = CSV.parse(csv);
    csvArray.splice(0, 1); // remove headers from CSV file

    return csvArray.reduce((accumulator: Teams, curr: Array<string>) => {
        const date = getItemAtIndex(curr, 0);
        const away = getItemAtIndex(curr, 2);
        const awayPoints = Number(getItemAtIndex(curr, 3));
        const home = getItemAtIndex(curr, 4);
        const homePoints = Number(getItemAtIndex(curr, 5));

        if (accumulator[away]) accumulator[away].away.push({ date, points: awayPoints });
        if (accumulator[home]) accumulator[home].home.push({ date, points: homePoints });

        if (!accumulator[away])
            accumulator[away] = {
                home: [],
                away: [{ date, points: awayPoints }],
            };

        if (!accumulator[home])
            accumulator[home] = {
                home: [{ date, points: homePoints }],
                away: [],
            };

        return accumulator;
    }, {});
};
