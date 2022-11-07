import React, { ReactElement, PropsWithChildren } from 'react';
import {
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Checkbox,
    ListItemSecondaryAction,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { AppState } from '../../../../shared/store';
import { explorerActions } from '../../explorer.actions';
import { IExplorerProps } from '../../explorer.interfaces';

type OwnProps = Pick<IExplorerProps, 'select'> & ReturnType<typeof mapStateToProps>;

const TeamsMultiselect = (props: PropsWithChildren<OwnProps>): ReactElement => {
    const [checked, setChecked] = React.useState([]);

    const handleToggle = (value: string) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        props.select(newChecked);
    };

    return (
        <List>
            {Object.keys(props.teams).map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                    <ListItem key={value} button>
                        <ListItemAvatar>
                            <Avatar>{value.slice(0, 1)}</Avatar>
                        </ListItemAvatar>
                        <ListItemText id={labelId} primary={`${value}`} />
                        <ListItemSecondaryAction>
                            <Checkbox
                                edge="end"
                                onChange={handleToggle(value)}
                                checked={checked.indexOf(value) !== -1}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
};

const mapStateToProps = (state: AppState) => {
    return {
        teams: state.import.teams,
    };
};

const mapDispatchToProps = {
    select: explorerActions.selectTeams,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamsMultiselect);
