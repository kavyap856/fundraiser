import React, { Component } from 'react';
import { Popover, controlId, Well, FormControl, Grid, Container, Row, Col, Button, Glyphicon, FormGroup, Datetime } from 'react-bootstrap';
import axios from 'axios';
import { putCall } from '../services/api';
import { postCall } from '../services/api';
import { getCall } from '../services/api';

import { Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
const data = new FormData();

export default class Updation_form extends Component {
    constructor(props) {
        super(props);
        this.userDataId = JSON.parse(localStorage.getItem("userData"));
        this.userDataMail = JSON.parse(localStorage.getItem("userDataMail"));
        this.state = {
            userData: [],
            first_name: "",
            last_name: "",
            email: this.userDataMail,
            street: "",
            city: "",
            state: "",
            country_code: "",
            zip: "",
            phone: "",
            profile_image_url: "",
            fundraiser_type: "",
            dob: "",
            facebook_link: "",
            twitter_link: "",
            google_link: "",
            organization_name: "",
            fundraiser_logo_url: "",
            modal: false,
            imagePreviewUrl: '',
            imagetype: '',
            uploadimageurl: ''
        }
        var url = "fundraisers/" + this.userDataId;
        getCall(url)
            .then((response) => {
                this.setState({ userData: response.data });
                console.log(response.data);
                this.setState({
                    first_name: this.state.userData.first_name,
                    last_name: this.state.userData.last_name,
                    email: this.state.userData.email,
                    street: this.state.userData.street,
                    city: this.state.userData.city,
                    state: this.state.userData.state,
                    country_code: this.state.userData.country_code,
                    zip: this.state.userData.zip,
                    phone: this.state.userData.phone,
                    profile_image_url: this.state.userData.profile_image_url,
                    fundraiser_type: this.state.userData.fundraiser_type,
                    dob: this.state.userData.dob,
                    facebook_link: this.state.userData.facebook_link,
                    twitter_link: this.state.userData.twitter_link,
                    google_link: this.state.userData.google_link,
                    organization_name: this.state.userData.organization_name,
                    fundraiser_logo_url: this.state.userData.fundraiser_logo_url,
                    modal: false,
                    imagePreviewUrl: '',
                    imagetype: '',

                })
            });

        this.uploadimage = this.uploadimage.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.uploadprofile = this.uploadprofile.bind(this);
        this.uploadlogo = this.uploadlogo.bind(this);
        this.handleurl = this.handleurl.bind(this);

    }
    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })

    }
    handleurl(event) {
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.setState({

                uploadimageurl: reader.result
            });
        }
        data.delete('file');
        data.delete('type');
        data.delete('user_id');
        data.append('file', file);
        reader.readAsDataURL(file)
    }
    uploadimage(event) {


        data.append('type', this.state.imagetype);
        data.append('user_id', this.userDataId);
        postCall("common/imageUpload", data).then((response) => {
            console.log(response);
            alert("Image Uploaded")
            if (this.state.imagetype == "fundraiserProfile") {

                this.setState({
                    profile_image_url: response.data.image_url,

                })
            }
            else {

                this.setState({
                    fundraiser_logo_url: response.data.image_url
                })
            }
        })
            .catch(function (error) {
                alert("Error Uploading File")
            }
            )
    }
    uploadprofile(event) {
        this.setState({
            modal: !this.state.modal,
            imagetype: "fundraiserProfile"
        });

    }
    uploadlogo(event) {

        this.setState({
            modal: !this.state.modal,
            imagetype: "fundraiserLogo"
        });
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleUpdate(event) {
        var url = "fundraisers/" + this.userDataId;
        putCall(url, this.state)
            .then((response) => {
                if (response.status == 200) {
                    alert("Updated");

                    console.log(response.data);
                    

                }
            });
    }
    render() {

        return (
            <Col >
                <Row>
                    <Col sm={6} >
                        <FormGroup controlId="first_name">
                            <FormControl autoFocus type="text" value={this.state.first_name} onChange={this.handleChange} placeholder="First Name"></FormControl>
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup controlId="last_name">
                            <FormControl type="text" value={this.state.last_name} onChange={this.handleChange} placeholder="Last Name"></FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <FormGroup controlId="dob">
                            {/* <Datetime dateFormat="MM-DD-YYYY"  value={this.state.dob} onChange={this.handleChange} /> */}
                            <FormControl type="date" Format="MM-DD-YYYY" value={this.state.dob} onChange={this.handleChange} placeholder="Date"></FormControl>
                        </FormGroup>
                    </Col>
                    <Col sm={2}>
                        <FormGroup controlId="country_code">
                            <FormControl type="text" value={this.state.country_code} onChange={this.handleChange} placeholder="Country Code"></FormControl>
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup controlId="phone">
                            <FormControl type="text" value={this.state.phone} onChange={this.handleChange} placeholder="Phone"></FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <div className="address">
                    <hr />
                    <p>Address</p>
                    <hr />
                </div>
                <Row>
                    <Col sm={6}>
                        <FormGroup controlId="state">
                            <FormControl type="text" value={this.state.state} onChange={this.handleChange} placeholder="State"></FormControl>
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup controlId="city">
                            <FormControl type="text" value={this.state.city} onChange={this.handleChange} placeholder="City"></FormControl>
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
                            <FormControl type="text" value={this.state.zip} onChange={this.handleChange} placeholder="Zip"></FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col sm={6}>
                        <FormGroup controlId="fundraiser_type">
                            <FormControl type="text" value={this.state.fundraiser_type} onChange={this.handleChange} placeholder="Fundraiser Type"></FormControl>
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <Button className="btn btn primary" onClick={this.uploadprofile} > Upload Profile Picture</Button>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <FormGroup controlId="organization_name">
                            <FormControl type="text" value={this.state.organization_name} onChange={this.handleChange} placeholder="Organisation Name"></FormControl>
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <Button className="btn btn primary" onClick={this.uploadlogo}> Upload Fundraiser logo </Button>
                    </Col>

                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} id="imagemodal">
                        <ModalBody>
                            <Input type="file" name="file" id="imageFile" onChange={this.handleurl} />
                            <div ><center><img id="previewimage" src={this.state.uploadimageurl} /></center></div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.uploadimage}  >Upload</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Close</Button>
                        </ModalFooter>
                    </Modal>

                </Row>
                <hr />
                <Row>
                    <Col sm={4}>
                        <FormGroup controlId="facebook_link">
                            <FormControl type="text" value={this.state.facebook_link} onChange={this.handleChange} placeholder="Facebook Link"></FormControl>
                        </FormGroup>
                    </Col>

                    <Col sm={4}>
                        <FormGroup controlId="google_link">
                            <FormControl type="text" value={this.state.google_link} onChange={this.handleChange} placeholder="Google Link"></FormControl>
                        </FormGroup>
                    </Col>

                    <Col sm={4}>
                        <FormGroup controlId="twitter_link">
                            <FormControl type="text" value={this.state.twitter_link} onChange={this.handleChange} placeholder="Twitter Link"></FormControl>
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