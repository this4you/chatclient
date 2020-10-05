import React from "react";
import {Auth} from "./pages";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Auth/>
            </div>
        </Router>
    );
}

export default App;