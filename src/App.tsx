import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './app/shared/components/layouts/public.layout';

function App(): JSX.Element {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Layout} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
