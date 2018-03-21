import React, { Component } from 'react';
import { Col, Image, Row, FormGroup, Label, InputGroup, Button, Grid } from 'react-bootstrap';
import SideNav from '../components/basicprofile';
import { Container } from 'reactstrap';
import { getCall } from '../services/api';


export default class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profiledetails: []
        }
        this.userDataId = JSON.parse(localStorage.getItem("userData"));
        var url = "fundraisers/" + this.userDataId;
        getCall(url)
            .then((response) => {
                this.setState({profiledetails: response.data });
                console.log(response.data);
            });
      
    }
    render() {
        return (
            <Col id="profiledetails ">
                <hr />
                <Row>
                    <Col sm="4">

                        <span className="formlabel">DOB : </span><span>{this.state.profiledetails.dob}</span>
                    </Col>
                    <Col sm="4">

                        <span className="formlabel">Phone : </span><span>{this.state.profiledetails.phone}</span>
                    </Col>
                    <Col sm="4">

                        <span className="formlabel">Organisation : </span><span>{this.state.profiledetails.organization_name}</span>
                    </Col>
                </Row>

                <div className="address">
                    <hr />

                    <span >Address</span>

                    <hr />
                </div>


                <Row>
                <Col sm="4"></Col>
                
                    <Col sm="1">
                        <p className="formlabel">Street : </p>
                    </Col>
                    <Col sm="1">
                        <p >{this.state.profiledetails.street}</p>
                    </Col>
                    
                    <Col sm="1">
                        <p className="formlabel">City :</p>
                    </Col>
                    <Col sm="1">
                        <p >{this.state.profiledetails.city}</p>
                    </Col>
                </Row>

                <Row>
                <Col sm="4"></Col>
               
                    <Col sm="1">
                        <p className="formlabel">State :</p>
                    </Col>
                    <Col sm="1">
                        <p >{this.state.profiledetails.state}</p>
                    </Col>
                   
                    <Col sm="1">
                        <p className="formlabel">Zip :</p>
                    </Col>
                    <Col sm="1">
                        <p >{this.state.profiledetails.zip}</p>
                    </Col>
                </Row>

                <hr />
                <Row>
                    <Col sm="2">
                        <p className="formlabel">Facebook url :</p>
                    </Col>
                    <Col sm="2">
                        <p >{this.state.profiledetails.facebook_link}</p>
                    </Col>
                    <Col sm="2">
                        <p className="formlabel">Twitter url :</p>
                    </Col>
                    <Col sm="2">
                        <p ><p >{this.state.profiledetails.twitter_link}</p></p>
                    </Col>
                    <Col sm="2">
                        <p className="formlabel">Google url :</p>
                    </Col>
                    <Col sm="2">
                        <p >{this.state.profiledetails.google_link}</p>
                    </Col>
                </Row>
                <hr />
            </Col>

        )
    }
}