import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import HomePage from './pages/HomePage';
// ...import other pages...

ReactDOM.render(
    <Router>
        <App>
            <Switch>
                <Route path="/" exact component={HomePage} />
                {/* ...other routes... */}
            </Switch>
        </App>
    </Router>,
    document.getElementById('root')
);
