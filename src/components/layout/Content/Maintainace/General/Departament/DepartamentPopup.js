import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import {
    Button,
    Form,
    FormControl,
    FormGroup,
    Col
} from 'react-bootstrap';
import Notifications, { notify } from 'react-notify-toast';


export default class DepartamentPopup extends Component {

    constructor(props, context) {
        super(props);
        this.state = {
            id: 0,
            department_name: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.department_id, 
            departament_name: nextProps.department_name
        });
    }


    render() {
        console.log(this.state);
        return (
            <div hidden={!this.props.setShow}>
                <Modal show={this.props.setShow} onHide={this.props.showPopupFunction}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.id} Departamento</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <FormGroup controlId="formUsername">
                            <Col className="form-group has-feedback">
                                <FormControl
                                    type="text" placeholder="ID"
                                    value={this.state.id}
                                    onChange={this.changeId.bind(this)} 
                                    disabled />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formPassword">
                            <Col className="form-group has-feedback">
                                <FormControl 
                                    className="form-control" 
                                    type="text" 
                                    placeholder="Departamento" 
                                    value={this.state.departament_name}
                                    onChange={this.changeName.bind(this)} />
                            </Col>
                        </FormGroup>

                        <FormGroup className="row">
                            <div className="col-xs-12">
                                <div className="checkbox icheck">
                                </div>
                                <Col className="col-xs-4">
                                    <Button className="btn btn-primary btn-block btn-flat" type="submit">Guardar</Button>
                                </Col>
                            </div>
                        </FormGroup>

                    </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }

    changeId(e) {
        this.setState({
            id: e.target.value
        });
    }

    changeName(e) {
        this.setState({
            departament_name: e.target.value
        });
    }

}