import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import login_form from './pages/login';
import registration_form from './pages/register';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import User from './pages/userhome';
import ViewProfile from './pages/viewprofile';
import Update from './pages/updateprofile';



export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <BrowserRouter>
                    <div>
                        <Route
                            exact
                            path="/"
                            component={login_form}
                        />
                        <Route
                            exact
                            path="/login"
                            component={login_form}
                        />
                        <Route
                            path="/register"
                            component={registration_form}
                        />
                        <Route
                            path="/userhome"
                            component={User}
                        />
                        <Route
                            path="/viewprofile"
                            component={ViewProfile}
                        />
                        <Route
                            path="/updateprofile"
                            component={Update}
                        />


                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}