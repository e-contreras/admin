import React, { Component } from 'react';
import DepartamentDataTable from './DepartamentDataTable';

export default class Departament extends Component {

    state = {
        departaments: [],
        data: {}
    }

    
    render() {
        return (
            <div>
                <div>
                    {/* Main content */}
                    <section className="content">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Departamentos</h3>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <DepartamentDataTable  />


                                        {/* <table id="example1" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Departmento</th>
                                                    <th>Acción</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.departaments.map(departament =>
                                                    <tr>
                                                        <td>
                                                            {departament.department_name}
                                                        </td>
                                                        <td>

                                                        </td>
                                                    </tr>
                                                )}

                                            </tbody>
                                        </table> */}
                                    </div>
                                    {/* /.box-body */}
                                </div>
                                {/* /.box */}
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </section>
                    {/* /.content */}
                </div>
            </div>
        )
    }
}
