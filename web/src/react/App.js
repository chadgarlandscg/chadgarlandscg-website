import React from 'react';
import Home from './Home';
import { Route, Switch } from 'react-router';

const App = props => {
    return (
        <div className="App">
            <Switch>
                <Route
                    exact path="/"
                    render={() => <Home/>}
                />
            </Switch>
        </div>
    );
}

export default App;
