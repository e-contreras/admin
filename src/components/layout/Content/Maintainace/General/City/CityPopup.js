import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import {
    Button,
    Form,
    FormControl,
    FormGroup,
    Col
} from 'react-bootstrap';
import Select from 'react-select';
import axios from 'axios';
import { baseURLServer } from '../../../../../../core/opcionesApp'


const initialState = {
    id: undefined,
    department_name: undefined,
    creation_date: undefined,
    modification_date: undefined,
    showPopup: false,
    departmentError: undefined,
    messages: []
};

export default class CityPopup extends Component {

    constructor(props, context) {
        super(props);
        this.state = initialState;
    }

    render() {
        return (
            <div hidden={!this.state.showPopup}>
                <Modal show={this.state.showPopup} onHide={this.hiddenPopup.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ciudad</Modal.Title>
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

                            <FormGroup controlId="departamento">
                                <Col className="form-group has-feedback">
                                    <FormControl
                                        name="departmentName"
                                        className="form-control"
                                        type="text"
                                        placeholder="Departamento"
                                        value={this.state.department_name}
                                        onChange={this.changeName.bind(this)} />
                                    {this.state.departmentError ? (
                                        <div style={{ fontSize: 12, color: 'red' }}>
                                            {this.state.departmentError}
                                        </div>
                                    ) : null}
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="exampleForm.ControlSelect1">
                                <label>Departamento</label>
                                <Select options={this.props.departmentSelect} />
                            </FormGroup>
                            <FormGroup className="row">
                                <div className="col-xs-12">
                                    <div className="checkbox icheck">
                                    </div>
                                    <Col className="col-xs-4">
                                        <Button
                                            className="btn btn-primary"
                                            type="submit"
                                            onClick={this.save.bind(this)}>
                                            <i className="fa fa-save"></i> Guardar
                                        </Button>
                                    </Col>
                                </div>
                            </FormGroup>
                            <div>
                                <ul>
                                    {
                                        this.state.messages.map((item) =>
                                            <li>{item}</li>
                                        )
                                    }
                                </ul>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.department_id,
            department_name: nextProps.department_name,
            showPopup: this.props.setShow
        });
    }

    newPopup(show) {
        this.setState({ showPopup: show });
    }

    hiddenPopup(e) {
        this.props.showPopupFunction();
        this.setState(initialState);
    }

    changeId(e) {
        this.setState({
            id: e.target.value
        });
    }

    changeName(e) {
        this.setState({
            department_name: e.target.value
        });
    }

    validate = () => {
        let departmentError = undefined;
        if (this.state.department_name === undefined) {
            departmentError = "Debe escribir el nombre del departamento";
        }

        if (departmentError) {
            this.setState({ departmentError });
            return false;
        }

        return true;

    }

    save(e) {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            let data = {
                creation_date: new Date().toISOString().toString(),
                creation_user: 'admin',
                department_name: this.state.department_name
            };

            if (this.state.id === undefined) {
                console.log("new");
            } else {
                console.log("updadte");
                data = {
                    id: parseInt(this.state.id),
                    modification_date: new Date().toISOString().toString(),
                    modification_user: 'admin',
                    department_name: this.state.department_name
                };
            }

            axios({
                method: 'post',
                url: baseURLServer + '/departments',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(data),
            }).then(res => {
                console.log(res)
            }).catch(error => {
                console.log(error);
                if (error.response) {
                    if (error.response.status >= 400 && error.response.status < 500) {
                        this.setState(error.response.data);
                    } else if (error.response.status > 500) {
                        this.props.parentCallbach({ messages: ['Nde!!! Ocurrió un tema en el servidor'] });
                    }
                }
            });

            this.setState({
                initialState
            });

        } else {
            this.setState({
                initialState
            });
            return;
        }
    }

}