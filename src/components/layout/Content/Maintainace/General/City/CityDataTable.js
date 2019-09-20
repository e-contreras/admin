import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import {
    Modal,
    Button,
    Form,
    FormControl,
    FormGroup,
    Col,
    Alert
} from 'react-bootstrap';
import Select from 'react-select';
import { baseURLServer } from '../../../../../../core/opcionesApp';

const initialState = {
    data: {
        columns: [],
        rows: []
    },
    department_select: [],
    departamentList: [],
    cities: [],
    show: false,
    show_aler: true,
    id: undefined,
    city_name: undefined,
    department_name: undefined,
    department_id: undefined,
    messages: [],
    formsErrors: []
};

export default class CityDataTable extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentWillMount() {
        this.getDepartments();
        this.getData();
    }

    render() {
        return (
            <div>
                    <div className="col-xs-10">
                        <Alert bsStyle="warning" onDismiss={this.handleDismiss.bind(this)} hidden={!this.show_aler}>
                            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
                            good.
                    </Alert>
                    </div>
                    <div className="col-xs-2">
                        <Button type="button" style={{ color: 'white' }} variant="primary" className="btn btn-primary" onClick={this.handleShowPopup.bind(this)}><i className="fa fa-plus"></i> Nuevo</Button>
                    </div>
                <MDBDataTable
                    striped
                    bordered
                    hover
                    data={this.state.data} />
                <div hidden={!this.state.show}>
                    <Modal show={this.state.show} onHide={this.handleHiddenPopup.bind(this)}>
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

                                <FormGroup controlId="ciudad">
                                    <Col className="form-group has-feedback">
                                        <FormControl
                                            name="cityName"
                                            className="form-control"
                                            type="text"
                                            autoFocus={true}
                                            placeholder="Ciudad"
                                            value={this.state.city_name}
                                            onChange={this.changeName.bind(this)} />
                                        {this.state.departmentError ? (
                                            <div style={{ fontSize: 12, color: 'red' }}>
                                                {this.state.formsErrors}
                                            </div>
                                        ) : null}
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="exampleForm.ControlSelect1">
                                    <label>Departamento</label>
                                    <Select
                                        placeholder="Nombre del departamento"
                                        options={this.state.department_select}
                                        defaultValue={{ label: this.state.department_name, value: this.state.department_name }}
                                        onChange={this.handleChangeDepartment.bind(this)} />
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
            </div>
        );
    }

    async getDepartments() {
        await axios.get(baseURLServer + '/departments').then(resp => {
            this.setState({ departamentList: resp.data });
        }).catch(e => {
            console.log(e);
        });
    }

    async getData() {

        await axios.get(baseURLServer + '/cities').then(resp => {
            this.setState({ cities: resp.data });
        }).catch(e => {
            console.log(e);
        });

        let jsondata = [];
        this.state.cities.forEach(c => {
            let depId = this.getLastResourceByHref(c.links.find(l => l.rel === 'department').href);
            let dep = this.state.departamentList.find(d => d.id === parseInt(depId));
            let data = {
                id: c.id,
                city_name: c.city_name,
                department_name: dep.department_name,
                department_id: dep.id
            }
            let ci = {
                'id': c.id,
                'city_name': c.city_name,
                'department_name': dep.department_name,
                'last': <Button type="button" style={{ color: 'white' }} variant="primary" className="btn btn-primary" data={JSON.stringify(data)} id={c.id} onClick={this.handleShowPopup.bind(this)}><i className="fa fa-edit"></i></Button>
            }
            jsondata.push(ci);
        });

        let depSele = [];

        this.state.departamentList.forEach(d => {
            depSele.push({
                label: d.department_name,
                value: d.id
            })
        });

        this.setState({ department_select: depSele });

        let columns = [
            {
                label: 'ID',
                field: 'id',
                sort: 'asc',
                width: '10%'
            },
            {
                label: 'CIUDAD',
                field: 'city_name',
                sort: 'asc',
                width: '40%'
            },
            {
                label: 'DEPARTAMENTO',
                field: 'department_name',
                sort: 'asc',
                width: '40%'
            },
            {
                label: 'Acciones',
                field: 'actions',
                width: '10%'
            },
        ];

        let data = {};
        data.rows = jsondata;
        data.columns = columns;
        this.setState({ data: data });
    }

    getLastResourceByHref(href) {
        return href.substring(href.lastIndexOf('/') + 1)
    }

    handleShowPopup(event) {
        event.preventDefault();
        let row_selected = JSON.parse(event.currentTarget.getAttribute('data'));
        if (row_selected === null || row_selected === undefined) {
            this.setState({
                id: undefined,
                city_name: undefined,
                department_name: undefined,
                department_id: undefined,
                show: true,
                messages: [],
                departmentError: undefined
            });
        } else {
            this.setState({ id: row_selected.id, city_name: row_selected.city_name, department_name: row_selected.department_name, department_id: row_selected.department_id, show: true, messages: [], departmentError: undefined });
        }
    }

    handleHiddenPopup(e) {
        this.setState({ show: !this.state.show });
    }


    newPopup(show) {
        this.setState({ showPopup: show });
    }

    hiddenPopup(e) {
        this.setState(initialState);
    }

    changeId(e) {
        this.setState({
            id: e.target.value
        });
    }

    changeName(e) {
        this.setState({
            city_name: e.target.value
        });
    }

    handleDismiss() {
        this.setState({ show_aler: false });
    }

    handleChangeDepartment = (department_select) => {
        this.setState({
            department_id: department_select.id,
            department_name: department_select.department_name
        });
    }


    validate = () => {
        let formsErrors = [];
        if (this.state.department_id === undefined) {
            formsErrors.push("Debe debe seleccinar el nombre del departamento");
        }

        if (this.state.city_name === null || this.state.city_name === undefined) {
            formsErrors.push("Debe debe especificar el nombre de la ciudad");
        }

        if (this.state.city_name.length <= 3) {
            formsErrors.push("El nombre de la ciudad debe componerse de al menos 4 letras");
        }

        if (formsErrors.length > 0) {
            this.setState({ formsErrors });
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
                city_name: this.state.city_name,
                department_id: this.state.department_id
            };

            if (this.state.id !== undefined) {
                data = {
                    id: parseInt(this.state.id),
                    modification_date: new Date().toISOString().toString(),
                    modification_user: 'admin',
                    city_name: this.state.city_name,
                    department_id: this.state.department_id
                };
            }

            axios({
                method: 'post',
                url: baseURLServer + '/cities',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(data),
            }).then(res => {
                this.setState({ initialState });
            }).catch(error => {
                console.log(error);
                if (error.response) {
                    if (error.response.status >= 400 && error.response.status < 500) {
                        this.setState({ messages: error.response.data });
                    } else if (error.response.status > 500) {
                        this.state.messages({ messages: ['Nde!!! Ocurrió un tema en el servidor'], show_aler: true });
                    }
                }
            });
        } else {
            this.setState({
                initialState
            });
            return;
        }
    }


}