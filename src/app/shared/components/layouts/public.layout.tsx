import React, { ReactElement } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import PublicNavbar from '../navBar';
import Import from '../../../modules/import';
import { compose } from 'redux';
import Explorer from '../../../modules/explorer';

const Layout = (): ReactElement => {
    return (
        <div>
            <PublicNavbar>
                <Switch>
                    <Route exact path="/" component={Import} />
                    <Route exact path="/explorer" component={Explorer} />
                </Switch>
            </PublicNavbar>
        </div>
    );
};

export default compose(withRouter)(Layout);
