import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./components/pages";
import SigninPage from "./components/pages/signin";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/signin' component={SigninPage} exact/>
            </Switch>
        </Router>
    );
}

export default App;
