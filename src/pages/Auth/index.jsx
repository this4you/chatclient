import React from 'react';
import {Route} from "react-router";

import LoginForm from "../../modules/LoginForm";
import "./Auth.scss";


const Auth = () => {
    return (
        <section className='auth'>
            <Route exact path={["/", "/login"]} component={LoginForm}/>
            <Route exact path='/register' render={ () => <h1>Hello</h1>} />
        </section>
    );
};

export default Auth;