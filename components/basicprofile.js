import React, { Component } from 'react';
import { Grid, Col, Row, Image, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Container } from 'reactstrap';
import { getCall } from '../services/api';

export default class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: []
        }
        this.userDataId = JSON.parse(localStorage.getItem("userData"));
        var url = "fundraisers/" + this.userDataId;
        getCall(url)
            .then((response) => {
                this.setState({userData: response.data });
                console.log(response.data);
            });
      
    }
   
    render() {
        return (
            <Col >
                <center>
                    <Row>
                        <div>
                            <Image id="profileimage" src={this.state.userData.profile_image_url} thumbnail />
                        </div>
                    </Row>
                    <Row id="name" >
                        <p  >{this.state.userData.first_name }<span> {this.state.userData.last_name}</span></p>
                    </Row>
                    <Row >

                        <p id="email1" >{this.state.userData.email}</p>
                    </Row>
                    <Row>
                    <Link id="btnviewprofile" role="button" to="/viewprofile">  View Profile</Link>
                    </Row>
                    <Row>
                    <Link id="btnupdateprofile" role="button" to="/updateprofile"> Update</Link>
                       
                    </Row>
                    <Row>
                        <div id="images">
                            <a href={'https://'+this.state.userData.twitter_link} class="fa fa-twitter"></a>
                            <a href={'https://'+this.state.userData.facebook_link} class="fa fa-facebook"></a>
                            <a href={'https://'+this.state.userData.google_link} class="fa fa-google"></a>
                        </div>
                    </Row>

                </center>
            </Col>
        );
    }
}