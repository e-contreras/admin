import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import NeighbourhoodPopup from './NeighbourhoodPopup';
import { baseURLServer } from '../../../../../../core/opcionesApp';

const initialState = {
    data: {
        columns: [],
        rows: [],
        row_selected: {
            id: undefined,
            neighbourhood_name: undefined,
            city_name: undefined
        }
    },
    neighbourhoodtList: [],
    cities: [],
    neighbourhoodSelect: [],
    show: false,
    id: undefined,
    city_name: undefined,
    error_msg: []
};

export default class NeighbourhoodDataTable extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    callbackFunction(error_msg) {
        this.setState({ error_msg: error_msg });
    }

    componentWillMount() {
        this.getDepartments();
        this.getCities();
        this.getData();
    }

    async getDepartments() {
        await axios.get(baseURLServer+'/departments').then(resp => {
            this.setState({ departamentList: resp.data });
        }).catch(e => {
            console.log(e);
        });
    }

    
    async getCities(){
        await axios.get(baseURLServer+'/cities').then(resp => {
            this.setState({ cities: resp.data });
        }).catch(e => {
            console.log(e);
        });
    }

    async getData() {
        await axios.get(baseURLServer+'/neighborhoods').then(resp => {
            this.setState({ neighbourhoodtList: resp.data });
        }).catch(e => {
            console.log(e);
        });
        let citiesJson = [];
        let neighbourhoodsJson = [];
        this.state.cities.forEach(c => {
            let depId = this.getLastResourceByHref(c.links.find(l => l.rel === 'department').href);
            let dep = this.state.departamentList.find(d => d.id === parseInt(depId));
            let ci = {
                'id': c.id,
                'city_name': c.city_name,
                'department_name': dep.department_name
            }
            citiesJson.push(ci);
        });

        this.state.neighbourhoodtList.forEach(n =>{
            let cid = this.getLastResourceByHref(n.links.find(l => l.rel === 'city').href);
            let c = citiesJson.find(c => c.id === parseInt(cid));
            let nei = {
                id: n.id,
                neighbourhood_name: n.description,
                city_name: c.city_name,
                department_name: c.department_name,
                'last': <Button type="button" variant="primary" id={n.id} onClick={this.handleShowPopup.bind(this)}><i className="fa fa-edit"></i></Button>
            }
            neighbourhoodsJson.push(nei);
        });

        let columns = [
            {
                label: 'ID',
                field: 'id',
                sort: 'asc',
                width: 60
            },
            {
                label: 'Barrio',
                field: 'neighbourhood_name',
                sort: 'asc',
                width: 500
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
        data.rows = neighbourhoodsJson;
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
                <NeighbourhoodPopup
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