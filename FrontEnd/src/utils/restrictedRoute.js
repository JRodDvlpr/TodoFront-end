import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const Restricted = ({ component: Component, ...rest }) => (
    <Route 
        {...rest}
        render={props => 
            localStorage.getItem('token') ? (
            <Component {...props} />
        ) : ( 
            <Redirect to='/login' />
        )
        }
    />
);

export default Restricted;