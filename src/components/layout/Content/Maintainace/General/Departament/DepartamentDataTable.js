import React, { Component } from 'react'
import { MDBDataTable, MDBBtn } from 'mdbreact';
import axios from 'axios';

export default class DepartamentDataTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                columns: [],
                rows: []
            }
        }
    }

    componentWillMount() {
        this.getData();
    }

    async getData() {
        let departaments = [];
        await axios.get('http://localhost:8080/departments').then(resp => {
            departaments = resp.data;
        }).catch(e => {
            console.log(e);
        });

        
        let jsondata = [];
        departaments.forEach(department => {
            let dept = { 
                'id': department.id,
                'department_name': department.department_name,
                 'last': <div><MDBBtn color="default" rounded size="sm">Editar</MDBBtn> <MDBBtn color="default" rounded size="sm">Borrar</MDBBtn></div>
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
        this.setState({ data });
    }

    render() {
        return (
            <MDBDataTable 
                striped 
                bordered 
                hover 
                data={this.state.data} />
        );
    }
}