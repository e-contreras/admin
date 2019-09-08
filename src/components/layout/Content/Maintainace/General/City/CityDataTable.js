import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import CityPopup from './CityPopup';
import { baseURLServer } from '../../../../../../core/opcionesApp';

const initialState = {
    data: {
        columns: [],
        rows: [],
        row_selected: {
            id: undefined,
            city_name: undefined,
            depatament_id: undefined
        }
    },
    departamentList: [],
    cities: [],
    show: false,
    id: undefined,
    city_name: undefined,
    error_msg: [],
    departmentSelect: []
};

export default class CityDataTable extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    callbackFunction(error_msg) {
        this.setState({ error_msg: error_msg });
    }

    componentWillMount() {
        this.getDepartments();
        this.getData();
    }

    async getDepartments() {
        await axios.get(baseURLServer+'/departments').then(resp => {
            this.setState({ departamentList: resp.data });
        }).catch(e => {
            console.log(e);
        });
    }

    async getData() {

        await axios.get(baseURLServer+'/cities').then(resp => {
            this.setState({ cities: resp.data });
        }).catch(e => {
            console.log(e);
        });

        let jsondata = [];
        this.state.cities.forEach(c => {
            let depId = this.getLastResourceByHref(c.links.find(l => l.rel === 'department').href);
            let dep = this.state.departamentList.find(d => d.id === parseInt(depId));
            let ci = {
                'id': c.id,
                'city_name': c.city_name,
                'department_name': dep.department_name,
                'last': <Button type="button" variant="primary" id={c.id} onClick={this.handleShowPopup.bind(this)}><i className="fa fa-edit"></i></Button>
            }
            jsondata.push(ci);
        });

        let depSele = [];
        
        this.state.departamentList.forEach(d => {
            depSele.push({
                label: d.department_name,
                value: d.depatament_id
            })
        });

        this.setState({departmentSelect: depSele});

        let columns = [
            {
                label: 'ID',
                field: 'id',
                sort: 'asc',
                width: 60
            },
            {
                label: 'CIUDAD',
                field: 'city_name',
                sort: 'asc',
                width: 500
            },
            {
                label: 'DEPARTAMENTO',
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

    getLastResourceByHref(href) {
        console.log(href.substring(href.lastIndexOf('/') + 1))
        return href.substring(href.lastIndexOf('/') + 1)
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

    handlerNewPopu(e) {
        this.handleShowPopup(e);
        this.setState({
            department_id: undefined,
            department_name: undefined
        });
    }

    render() {
        return (
            <div>
                <div style={{ float: "right", with: '100%' }}>
                    <Button type="button" className="btn btn-primary" onClick={this.handlerNewPopu.bind(this)}>
                        <i className="fa fa-plus"></i> Nuevo
                    </Button>
                </div>
                <MDBDataTable
                    striped
                    bordered
                    hover
                    data={this.state.data} />
                <CityPopup
                    setShow={this.state.show}
                    showPopupFunction={this.handleHiddenPopup.bind(this)}
                    department_name={this.state.data.department_name}
                    department_id={this.state.data.id}
                    parentCallback={this.callbackFunction.bind(this)}
                    departmentSelect ={this.state.departmentSelect}
                />
            </div>
        );
    }
}