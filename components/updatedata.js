import React, { Component } from 'react';
import { controlId, Well, FormControl, Grid, Container, Row, Col, Button, Glyphicon, FormGroup,Datetime } from 'react-bootstrap';
import axios from 'axios';
import { putCall } from '../services/api';


export default class Updation_form extends Component {
    constructor(props)
    {
        super(props);
        this.userData = JSON.parse(localStorage.getItem("userData"));
        this.state={
            
                first_name:this.userData.first_name,
                last_name: this.userData.last_name,
                email: this.userData.email,
                street: this.userData.street,
                city:this.userData.city,
                state: this.userData.state,
                country_code: this.userData.country_code,
                zip: this.userData.zip,
                phone:this.userData.phone,
                profile_image_url: this.userData.profile_image_url,
                fundraiser_type: this.userData.fundraiser_type,
                dob: this.userData.dob,
                facebook_link: this.userData.facebook_link,
                twitter_link: this.userData.twitter_link,
                google_link: this.userData.google_link,
                organization_name:this.userData.organisation_name,
                fundraiser_logo_url: this.userData.fundraiser_logo_url
            
        }
   
        this.handleChange=this.handleChange.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);
    }
    handleChange(event)
    {
        this.setState({
            [event.target.id] : event.target.value
        })
        
    }
    handleUpdate(event)
    {
        var url = "fundraisers/" + this.userData.id;
        putCall(url,this.state)
        .then((response) => {
            this.setState({ profiledetails: response.data });
            console.log(this.state.dob);
            console.log(response);
          

        });
    }
    render() {
        return (
            <Col >
                <Row>
                    <Col sm={6} >
                        <FormGroup controlId="first_name">
                            <FormControl autoFocus  type="text" value={this.state.first_name} onChange={this.handleChange} placeholder="First Name"></FormControl>
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup controlId="last_name">
                            <FormControl  type="text" value={this.state.last_name} onChange={this.handleChange} placeholder="Last Name"></FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <FormGroup controlId="dob">
                        {/* <Datetime dateFormat="MM-DD-YYYY"  value={this.state.dob} onChange={this.handleChange} /> */}
                            <FormControl  type="date" Format="MM-DD-YYYY"  value={this.state.dob} onChange={this.handleChange} placeholder="Date"></FormControl>
                        </FormGroup>
                    </Col>
                    <Col sm={2}>
                        <FormGroup controlId="country_code">
                            <FormControl  type="text" value={this.state.country_code} onChange={this.handleChange} placeholder="Country Code"></FormControl>
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup controlId="phone">
                            <FormControl  type="text" value={this.userData.phone} onChange={this.handleChange} placeholder="Phone"></FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <div id="address">
                <hr />
                <p>Address</p>
                <hr />
                </div>
                <Row>
                    <Col sm={6}>
                        <FormGroup controlId="state">
                            <FormControl  type="text" value={this.state.state} onChange={this.handleChange} placeholder="State"></FormControl>
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup controlId="city">
                            <FormControl  type="text" value={this.state.city} onChange={this.handleChange} placeholder="City"></FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <FormGroup controlId="street">
                            <FormControl type="text" value={this.state.street} onChange={this.handleChange} placeholder="Street"></FormControl>
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup controlId="zip">
                            <FormControl id="zip" type="text" value={this.state.zip} onChange={this.handleChange} placeholder="Zip"></FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col sm={6}>
                        <FormGroup controlId="fundraiser_type">
                            <FormControl  type="text" value={this.state.fundraiser_type} onChange={this.handleChange} placeholder="Fundraiser Type"></FormControl>
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup controlId="organisation_name">
                            <FormControl id="organisation" type="text" value={this.state.organisation_name} onChange={this.handleChange} placeholder="Organisation Name"></FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <FormGroup controlId="profile_image_url">
                            <FormControl  type="text" value={this.state.profile_image_url} onChange={this.handleChange} placeholder="Profile Image url"></FormControl>
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup controlId="fundraiser_logo_url">
                            <FormControl  type="text" value={this.state.fundraiser_logo_url} onChange={this.handleChange} placeholder="Fundraiser Logo url"></FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col sm={4}>
                        <FormGroup controlId="facebook_link">
                            <FormControl  type="text" value={this.state.facebook_link} onChange={this.handleChange} placeholder="Facebook Link"></FormControl>
                        </FormGroup>
                    </Col>
               
                    <Col sm={4}>
                        <FormGroup controlId="google_link">
                            <FormControl  type="text" value={this.state.google_link} onChange={this.handleChange} placeholder="Google Link"></FormControl>
                        </FormGroup>
                    </Col>
                
                    <Col sm={4}>
                        <FormGroup controlId="twitter_link">
                            <FormControl  type="text" value={this.state.twitter_link} onChange={this.handleChange} placeholder="Twitter Link"></FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={3}>
                        <Button bsStyle="success" onClick={this.handleUpdate} >Update</Button>
                    </Col>
                    <Col sm={3}>
                        <Button bsStyle="danger">Cancel</Button></Col>
                </Row>
            </Col>
        )
    }
}