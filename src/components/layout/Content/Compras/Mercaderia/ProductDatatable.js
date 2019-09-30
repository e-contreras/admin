import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import { baseURLServer } from '../../../../../core/opcionesApp';
import { Modal } from 'react-bootstrap';
import {
    Button,
    Form,
    FormControl,
    FormGroup,
    Col
} from 'react-bootstrap';

const productModel ={
    id: undefined,
    code: undefined,
    name: undefined,
    category: undefined,
    brand: undefined
}

const initialState = {
    data: {
        columns: [],
        rows: []
    },
    show: false,
    id: undefined,
    product_name: undefined,
    product_category: undefined,
    product_brand: undefined,
    product_article: undefined,
    departmentError: undefined,
    messages: []
};

export default class DepartamentDataTable extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
        this.changeName = this.changeName.bind(this);
        this.changeName = this.changeName.bind(this);
    }

    componentWillMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                <div style={{ float: "right", with: '100%' }}>
                    <Button type="button" style={{color: 'white'}} variant="primary" className="btn btn-primary" onClick={this.handlerNewPopu.bind(this)}><i className="fa fa-plus"></i> Nuevo</Button>
                </div>
                <MDBDataTable
                    striped
                    bordered
                    hover
                    data={this.state.data} />
                <div hidden={!this.state.show}>
                    <Modal show={this.state.show} onHide={this.handleHiddenPopup.bind(this)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Mercaderías</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <FormGroup controlId="formProductId">
                                    <Col className="form-group has-feedback">
                                        <FormControl
                                            type="text"
                                            placeholder="ID"
                                            value={this.state.id}
                                            onChange={this.changeId}
                                            disabled />
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formProductName">
                                    <Col className="form-group has-feedback">
                                        <FormControl
                                            name="departmentName"
                                            ref="departmentName"
                                            autoFocus={true}
                                            className="form-control"
                                            type="text"
                                            placeholder="Departamento"
                                            value={this.state.department_name}
                                            onChange={this.changeName} />
                                        {this.state.departmentError ? (
                                            <div style={{ fontSize: 12, color: 'red' }}>
                                                {this.state.departmentError}
                                            </div>
                                        ) : null}
                                    </Col>
                                </FormGroup>

                                <FormGroup className="row">
                                    <div className="col-xs-12">
                                        <Col className="col-xs-12">
                                            <Button
                                                style={{float: 'right', color: 'white'}}
                                                className="btn btn-primary"
                                                type="submit"
                                                onClick={this.save.bind(this)}><i className="fa fa-save"></i> Guardar</Button>
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

    async getData() {
        let products = [];
        await axios.get(baseURLServer + '/products').then(resp => {
            products = resp.data;
        }).catch(e => {
            console.log(e);
        });


        let jsondata = [];
        products.forEach(product => {
            let dept = {
                'id': product.code,
                'department_name': product.product_name,
                'last': <Button type="button" style={{color: 'white'}} variant="primary"  className="btn btn-primary" data={JSON.stringify(product)} onClick={this.handleShowPopup.bind(this)}><i className="fa fa-edit"></i></Button>
            }
            jsondata.push(dept);
        });
        let columns = [
            {
                label: 'CODIGO',
                field: 'codigo',
                sort: 'asc',
                width: 60
            },
            {
                label: 'Nombre',
                field: 'nombre',
                sort: 'asc',
                width: 500
            },
            {
                label: 'categoria',
                field: 'categoria',
                sort: 'asc',
                width: 500
            },
            {
                label: 'Marca',
                field: 'marca',
                sort: 'asc',
                width: 500
            },
            {
                label: 'Articulo',
                field: 'articulo',
                sort: 'asc',
                width: 500
            },
            {
                label: 'Acciones',
                field: 'actions',
                sort: 'asc',
                width: 100
            },
        ];

        let data = {};
        data.rows = jsondata;
        data.columns = columns;
        this.setState({ data: data });
    }

    handleShowPopup(event) {
        event.preventDefault();
        let row_selected = JSON.parse(event.currentTarget.getAttribute('data'));
        if (row_selected === null || row_selected === undefined) {
            this.setState({ id: undefined, department_name: undefined, show: true, messages: [], departmentError: undefined });
        } else {
            this.setState({ id: row_selected.id, department_name: row_selected.department_name, show: true, messages: [], departmentError: undefined });
        }
        this.focusToInput();
    }

    focusToInput() {
        let node = ReactDOM.findDOMNode(this.refs.departmentName);
        if (node && node.focus instanceof Function) {
            node.focus();
        }
    }

    handleHiddenPopup(e) {
        this.setState({ show: !this.state.show });
    }

    handlerNewPopu(e) {
        this.handleShowPopup(e);
        this.setState({
            department_id: undefined,
            department_name: undefined
        });
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
        this.setState({ department_name: e.target.value });
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
        if (this.validate()) {
            let data = {
                creation_date: new Date().toISOString().toString(),
                creation_user: 'admin',
                department_name: this.state.department_name
            };

            if (this.state.id !== undefined) {
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
                this.setState({initialState});
            }).catch(error => {
                if (error.response) {
                    if (error.response.status >= 400 && error.response.status < 500) {
                        this.setState(error.response.data);
                    } else if (error.response.status > 500) {
                        this.setState({ messages: ['Nde!!! Ocurrió un tema en el servidor'] });
                    }
                }
            });
        } else {
            this.setState({initialState});
        }
    }
}