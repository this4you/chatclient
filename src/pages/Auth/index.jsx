import React from 'react';
import {Route} from "react-router";

import {LoginForm, RegisterForm} from "../../modules";
import "./Auth.scss";


const Auth = () => {
    return (
        <section className='auth'>
            <Route exact path={["/", "/login"]} component={LoginForm}/>
            <Route exact path='/register' render={() => <RegisterForm/>} />
        </section>
    );
};

export default Auth;