import React, { Component } from 'react';
import { Col, Image, Row, FormGroup, Label, InputGroup, Button, Grid } from 'react-bootstrap';
import SideNav from '../components/basicprofile';
import { Container } from 'reactstrap';
import { getCall } from '../services/api';


export default class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.userData = JSON.parse(localStorage.getItem("userData"));
        this.state = {
            profiledetails: []
        }
    }
    componentDidMount() {
        var url = "fundraisers/" + this.userData.id;
        getCall(url)
            .then((response) => {
                this.setState({ profiledetails: response.data });
                console.log(response.data);
            });
    }
    render() {
        return (
            <Col id="profiledetails ">
                <hr />
                <Row>
                    <Col sm="4">

                        <span>DOB : </span><span>111111</span>
                    </Col>
                    <Col sm="4">

                        <span>Phone : </span><span>{this.state.profiledetails.phone}</span>
                    </Col>
                    <Col sm="4">

                        <span>Organisation : </span><span>1111fff11</span>
                    </Col>
                </Row>
                <hr />
                <hr />

                <Col sm="4">
                    <span>Address</span>
                </Col>

                <hr />

                <Row>
                    <Col sm="2">
                        <p >Street :</p>
                    </Col>
                    <Col sm="2">
                        <p >aaaaaa</p>
                    </Col>
                    <Col sm="2"></Col>
                    <Col sm="2">
                        <p >City :</p>
                    </Col>
                    <Col sm="2">
                        <p >aaaaaa</p>
                    </Col>
                </Row>

                <Row>
                    <Col sm="2">
                        <p >State :</p>
                    </Col>
                    <Col sm="2">
                        <p >aaaaaa</p>
                    </Col>
                    <Col sm="2"></Col>
                    <Col sm="2">
                        <p >Zip :</p>
                    </Col>
                    <Col sm="2">
                        <p >aaaaaa</p>
                    </Col>
                </Row>


            </Col>

        )
    }
}