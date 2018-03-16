import React, { Component } from 'react';
import Navbar from '../components/navbar';
import SideNav from '../components/basicprofile';
import Updation_form from '../components/updatedata';
import { Col, Image, Row} from 'react-bootstrap';


export default class Update extends Component {
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
                        <Col sm={9} id="updationdata" >
                            <Updation_form />
                        </Col>
                    </Row>
            


            </div>
        );
    }
}