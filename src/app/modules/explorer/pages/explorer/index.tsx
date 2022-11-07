import React, { FunctionComponent, PropsWithChildren, ReactElement } from 'react';
import { explorerActions } from '../../explorer.actions';
import { connect } from 'react-redux';
import { IExplorerProps } from '../../explorer.interfaces';
import { AppState } from '../../../../shared/store';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Multiselect from '../../components/multiselect';
import VenueRadioSelect from '../../components/radio';
import { reduceTeamData } from '../../utils/explorer.helper';

type OwnProps = IExplorerProps & ReturnType<typeof mapStateToProps>;

const Explorer = (props: PropsWithChildren<OwnProps>): ReactElement<FunctionComponent<OwnProps>> => {
    const { series, categories } = reduceTeamData(props.teams, props.selected, props.venue);

    const options = {
        title: {
            text: 'NBA TEAMS',
        },
        width: '100%',
        xAxis: {
            title: {
                text: 'Dates',
            },
            categories: Array.from(categories),
        },

        yAxis: {
            title: {
                text: 'Points',
            },
        },
        credits: false,
        series: series,
    };

    return (
        <div style={{ marginTop: 100 }}>
            <VenueRadioSelect />
            <section>
                <div>{props.selected.length === 0 ? 'Select teams to view data' : props.selected.join(', ')}</div>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </section>
            <Multiselect />
        </div>
    );
};

const mapStateToProps = (state: AppState) => {
    return {
        teams: state.import.teams,
        selected: state.explore.selected,
        venue: state.explore.venue,
    };
};

const mapDispatchToProps = {
    select: explorerActions.selectTeams,
};

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
