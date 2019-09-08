import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import DepartamentPopup from './DepartamentPopup';
import {baseURLServer} from '../../../../../../core/opcionesApp';

const initialState = {
    data: {
        columns: [],
        rows: [],
        row_selected: {
            id: 0,
            department_name: ''
        }
    },
    show: false,
    id: 0,
    department_name: '',
    error_msg: []
};

export default class DepartamentDataTable extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    callbackFunction(error_msg) {
        this.setState({ error_msg: error_msg });
    }

    componentWillMount() {
        this.getData();
    }

    async getData() {
        let departaments = [];
        await axios.get(baseURLServer+'/departments').then(resp => {
            departaments = resp.data;
        }).catch(e => {
            console.log(e);
        });


        let jsondata = [];
        departaments.forEach(department => {
            let dept = {
                'id': department.id,
                'department_name': department.department_name,
                'last': <Button type="button" variant="primary" id={department.id} onClick={this.handleShowPopup.bind(this)}><i className="fa fa-edit"></i></Button>
            }
            jsondata.push(dept);
        });
        let columns = [
            {
                label: 'ID',
                field: 'id',
                sort: 'asc',
                width: 60
            },
            {
                label: 'NOMBRE',
                field: 'department_name',
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
        let id = parseInt(event.target.id);
        let data = this.state.data;
        let selected_row = {};
        data.rows.forEach((row) => {
            if (row.id === id) {
                selected_row = row;
            }
        });
        data.row_selected = selected_row;
        data.id = selected_row.id;
        data.department_name = selected_row.department_name;
        this.setState({ data: data, show: true });
    }

    handleHiddenPopup(e) {
        this.setState({ show: !this.state.show });
    }

    handlerNewPopu(e){
        this.handleShowPopup(e);
        this.setState({
            department_id : undefined,
            department_name: undefined
        });
    }

    render() {
        return (
            <div>
                <div style={{ float: "right", with: '100%' }}>
                    <Button type="button" className="btn btn-primary" onClick={this.handlerNewPopu.bind(this)}>Nuevo</Button>
                </div>
                <MDBDataTable
                    striped
                    bordered
                    hover
                    data={this.state.data} />
                <DepartamentPopup
                    setShow={this.state.show}
                    showPopupFunction={this.handleHiddenPopup.bind(this)}
                    department_name={this.state.data.department_name}
                    department_id={this.state.data.id}
                    parentCallback={this.callbackFunction.bind(this)}
                />
                <div style={{ display: (this.state.error_msg.length > 0 ? 'block' : 'none') }}>errrror</div>
            </div>
        );
    }
}