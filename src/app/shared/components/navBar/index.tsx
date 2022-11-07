import React, { ReactElement } from 'react';
import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

const PublicNavbar = (props: Props): ReactElement => {
    const { children } = props;

    return (
        <div>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h5" noWrap>
                        NBA Teams Stats
                    </Typography>
                    <div />
                </Toolbar>
            </AppBar>
            <main>{children}</main>
        </div>
    );
};

interface Props {
    children?: React.ReactNode;
}

export default compose(withRouter)(PublicNavbar);
