import React, { Component } from 'react';
import Navbar from '../components/navbar';
import SideNav from '../components/basicprofile';
import UserProfile from '../components/profile';
import { Col, Image, Row, FormGroup, Label, InputGroup, Button, Grid } from 'react-bootstrap';
import { Container } from 'reactstrap';


export default class ViewProfile extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <Navbar/>
                
                    <Row>
                        <Col sm={2}  id="imagecol">
                            <SideNav />
                        </Col>
                        <Col sm={9}>
                            <UserProfile />
                        </Col>
                    </Row>
            


            </div>
        );
    }
}