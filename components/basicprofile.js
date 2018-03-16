import React, { Component } from 'react';
import { Grid, Col, Row, Image, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Container } from 'reactstrap';

export default class SideNav extends Component {
    constructor(props) {
        super(props);
        this.userData = JSON.parse(localStorage.getItem("userData"));
    }
    
    render() {
        return (
            <Col >
                <center>
                    <Row>
                        <div>
                            <Image id="profileimage" src="profileimage.jpg" thumbnail />
                        </div>
                    </Row>
                    <Row id="name" >
                        <p  >{this.userData.first_name }<span> {this.userData.last_name}</span></p>
                    </Row>
                    <Row >

                        <p id="email1" >{this.userData.email}</p>
                    </Row>
                    <Row>
                    <Link id="btnviewprofile" role="button" to="/viewprofile">  View Profile</Link>
                    </Row>
                    <Row>
                    <Link id="btnupdateprofile" role="button" to="/updateprofile"> Update</Link>
                       
                    </Row>
                    <Row>
                        <div id="images">
                            <a href="#" class="fa fa-twitter"></a>
                            <a href="#" class="fa fa-facebook"></a>
                            <a href="#" class="fa fa-google"></a>
                        </div>
                    </Row>

                </center>
            </Col>
        );
    }
}