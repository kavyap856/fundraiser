import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormControl, FormGroup, Button, Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Navbar from '../components/navbar';
import { postCall } from '../services/api';
import TextField from 'material-ui/TextField';

export default class login_form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        if (this.state.email == "" || this.state.password == "") {
            alert("Enter values for all fields")
        }
        else {
            var object = {

                "email": this.state.email,
                "password": this.state.password
            }
            postCall("fundraisers/login", object).then((response) => {
                if (response.status == 200) {
                    this.userdata = response.data.user_data;
                    this.auth = response.headers.auth;
                    localStorage.setItem("userData", JSON.stringify(this.userdata.id));
                    localStorage.setItem("userDataMail", JSON.stringify(this.userdata.email));
                    localStorage.setItem("AuthCode", JSON.stringify(this.auth));
                    this.props.history.push("/userhome");
                }
               
            })
            .catch(function(error)
            {
                alert("Login Failed!! \nInvalid Credentials")
            }
            )
        }
    }
    render() {
        return (
            <div >
                <Grid>
                    <Row>
                        <Col sm={4}></Col>
                        <Col sm={4} id="login">
                            <Row>
                                <Col sm={12} id="signin_heading">
                                    <center><h2>Sign In</h2></center>
                                </Col>
                                <Col sm={12}>
                                    <TextField
                                        floatingLabelText="E-mail"
                                        id="email"
                                        type="text"

                                        onChange={this.handleEmailChange}
                                        fullWidth={true}
                                    />

                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <TextField

                                        floatingLabelText="Password"
                                        id="password"
                                        type="password"
                                        onChange={this.handlePasswordChange}
                                        fullWidth={true}
                                    />

                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <Button type="button" id="btnlogin" onClick={this.handleSubmit} >Login</Button>
                                </Col>
                            </Row>
                            <Row>

                                <Col sm={12}>
                                    <center> <p>Not a Member? <Link to="/register">Sign Up Now</Link></p></center>
                                </Col>
                            </Row>
                        </Col>

                    </Row>

                </Grid>
            </div>
        )
    }
}