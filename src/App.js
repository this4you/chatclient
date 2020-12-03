import React from "react";
import {Auth, Home} from "./pages";

import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Route exact path={["/", "/login", "/register"]} component={Auth}/>
                <Route exact path="/im" component={Home}/>
            </div>
        </Router>
    );
}

export default App;