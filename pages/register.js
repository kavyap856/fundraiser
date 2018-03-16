import React, { Component } from 'react';
import { Well, FormControl, Grid, Container, Row, Col, Button, Glyphicon, FormGroup } from 'react-bootstrap';
import axios from 'axios';
import Navbar from '../components/navbar';
import { postCall } from '../services/api';

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
    handleSubmit(event) {
        alert("" + this.state.email);
        var object = {

            "email": this.state.email,
            "password": this.state.password,
            "confirm_password": this.state.confirmpassword,
            "fundraiser_type": this.state.type,
            "phone": this.state.phone,
            "organization_name": this.state.organisation
        }
        postCall("fundraisers/", object).then(function (response) {
            if (response.status == 200) { alert("Account Created"); }
            console.log(response);
        })
    }
    render() {
        return (
            <div >
                <Navbar />
                <Grid>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={6} id="registerContainer">

                            <Row>
                                <Col sm={12} id="signin_heading">
                                    <center><h2>Sign Up</h2></center>
                                </Col>
                                <Col sm={12}>
                                    <FormGroup>
                                        <FormControl id="email" type="text" value={this.state.value} onChange={this.handleEmailChange} placeholder="E-mail"></FormControl>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <FormGroup>
                                        <FormControl id="password" type="password" value={this.state.value} onChange={this.handlePasswordChange} placeholder="Password"></FormControl>
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <FormControl id="confirmpassword" type="password" value={this.state.value} onChange={this.handleConfirmChange} placeholder="Confirm Password"></FormControl>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <FormGroup>
                                        <FormControl id="phone" type="text" value={this.state.value} onChange={this.handlePhoneChange} placeholder="Phone"></FormControl>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <FormGroup>
                                        <FormControl id="type" type="text" value={this.state.value} onChange={this.handleTypeChange} placeholder="Fundraiser Type"></FormControl>
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <FormControl id="organisation" type="text" value={this.state.value} onChange={this.handleOrganisationChange} placeholder="Organisation"></FormControl>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={3}></Col>
                                <Col sm={3}>
                                    <Button bsStyle="success" onClick={this.handleSubmit} >Register</Button>
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