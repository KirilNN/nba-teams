import React, { ReactElement, PropsWithChildren, ChangeEvent } from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { connect } from 'react-redux';
import { explorerActions } from '../../explorer.actions';
import { IExplorerProps, VenueSelection } from '../../explorer.interfaces';

type OwnProps = Pick<IExplorerProps, 'selectVenue'>;

const VenueRadioSelect = (props: PropsWithChildren<OwnProps>): ReactElement => {
    const [value, setValue] = React.useState('home');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        props.selectVenue(event.target.value as VenueSelection);
    };
    return (
        <FormControl component="fieldset">
            <RadioGroup row aria-label="venue" name="venue" value={value} onChange={handleChange}>
                <FormControlLabel value="home" control={<Radio />} label="Home" />
                <FormControlLabel value="away" control={<Radio />} label="Away" />
                <FormControlLabel value="both" control={<Radio />} label="Both" />
            </RadioGroup>
        </FormControl>
    );
};

const mapDispatchToProps = {
    selectVenue: explorerActions.selectVenue,
};

export default connect(null, mapDispatchToProps)(VenueRadioSelect);
