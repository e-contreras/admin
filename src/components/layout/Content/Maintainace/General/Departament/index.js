import React, { Component } from 'react';
import DepartamentDataTable from './DepartamentDataTable';

export default class Departament extends Component {

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
