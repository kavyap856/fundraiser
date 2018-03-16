import React, { Component } from 'react';
import Navbar from '../components/navbar'
import SideNav from '../components/basicprofile';
import { Col, Row } from 'react-bootstrap';

export default class User extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Row>
                    <Col sm={2} id="imagecol">
                        <SideNav />
                    </Col>
                </Row>
            </div>
        );
    }
}