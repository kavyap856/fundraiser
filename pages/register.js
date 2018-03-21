import React, { Component } from 'react';
import { Well, FormControl, Grid, Container, Row, Col, Button, Glyphicon, FormGroup } from 'react-bootstrap';
import axios from 'axios';
import Navbar from '../components/navbar';
import { postCall } from '../services/api';
import validator from 'validator';

export default class registration_form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            confirmpassword: "",
            phone: "",
            type: "",
            organisation: ""
            
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleOrganisationChange = this.handleOrganisationChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        // this.validateEmail=this.validateEmail.bind(this);
        // this.validatePassword=this.validatePassword.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }
    handleConfirmPasswordChange(event) {
        this.setState({ confirmpassword: event.target.value });
    }
    handlePhoneChange(event) {
        this.setState({ phone: event.target.value });
    }
    handleTypeChange(event) {
        this.setState({ type: event.target.value });
    }
    handleOrganisationChange(event) {
        this.setState({ organisation: event.target.value });
    }
  
    clearErrors() {
        this.setState({
            emailerror: "",
            passworderror: "",
            confirmpassworderror: "",
            phoneerror: "",
            typeerror:""
        })
    }
    validateForm() {
        var Errorflag = 0;
        if (!validator.isEmail(this.state.email)) {
            this.setState({ emailerror: "Invalid Email" });
            Errorflag = 1;
        }
        if (!validator.isLength(this.state.password, { min: 6, max: 15 })) {
            this.setState({ passworderror: "Password should have atleast 6 character and a max of 15 " });
            Errorflag = 1;
        }
        if (!validator.equals(this.state.password, this.state.confirmpassword)) {
            this.setState({ confirmpassworderror: "Passwords does not match " });
            Errorflag = 1;
        }
        if (!validator.isNumeric(this.state.phone)) {
            this.setState({ phoneerror: "Invalid mobile number" });
            Errorflag = 1;
        }
        if (validator.isEmpty(this.state.type) ) {
            this.setState({ typeerror: "value should br either 'o' or 'i'" });
            Errorflag = 1;
        }
        if (Errorflag == 1) {
            return false;
        }
        else
            return true;



    }
    handleSubmit(event) {
        this.clearErrors();
        if (this.validateForm()) {
            var object = {

                "email": this.state.email,
                "password": this.state.password,
                "confirm_password": this.state.confirmpassword,
                "fundraiser_type": this.state.type,
                "phone": this.state.phone,
                "organization_name": this.state.organization
            }
            postCall("fundraisers/", object).then((response) => {
                if (response.status == 200) {
                    alert("Account Created successfuly !!\n Please LogIn to Continue....");
                    this.props.history.push("/login");
                    console.log(response);
                }
            })
        }

    }
    render() {
        return (
            <div >

                <Grid>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={6} id="registerContainer">

                            <Row>
                                <Col sm={12} id="signin_heading">
                                    <center><h2>Sign Up</h2></center>
                                </Col>
                                <Col sm={12}>

                                    <FormGroup controlId="Registeremail" >
                                        <FormControl type="text" value={this.state.value} onChange={this.handleEmailChange} placeholder="E-mail" >

                                        </FormControl>
                                        <p className="error">{this.state.emailerror}</p>
                                    </FormGroup>

                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <FormGroup controlId="password" >
                                        <FormControl type="password" value={this.state.value} onChange={this.handlePasswordChange} placeholder="Password" ></FormControl>
                                        <p className="error">{this.state.passworderror}</p>
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup controlId="confirmpassword">
                                        <FormControl id="confirmpassword" type="password" value={this.state.value} onChange={this.handleConfirmPasswordChange} placeholder="Confirm Password" ></FormControl>
                                        <p className="error">{this.state.confirmpassworderror}</p>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <FormGroup controlId="phone">
                                        <FormControl id="phone" type="text" maxLength="10" value={this.state.value} onChange={this.handlePhoneChange} placeholder="Phone" ></FormControl>
                                        <p className="error">{this.state.phoneerror}</p>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <FormGroup controlId="type">
                                        <FormControl type="text" value={this.state.value} onChange={this.handleTypeChange} placeholder="Fundraiser Type" ></FormControl>
                                        <p className="error">{this.state.typeerror}</p>
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup controlId="organisation">
                                        <FormControl id="organisation" type="text" value={this.state.value} onChange={this.handleOrganisationChange} placeholder="Organisation" ></FormControl>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={3}></Col>
                                <Col sm={3}>
                                    <FormGroup>
                                        <Button bsStyle="success"  onClick={this.handleSubmit} >Register</Button>
                                    </FormGroup>
                                </Col>
                                <Col sm={3}>
                                    <Button bsStyle="danger">Cancel</Button></Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}