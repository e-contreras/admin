import React, { Component } from 'react'

export default class SaleBook extends Component {
    render() {
        return (
            <div>
                <div className="col-md-12">
                    <div className="box box-primary">
                        <div className="box-header">
                            <h3 className="box-title">Libro de compras</h3>
                        </div>
                        <div className="box-body">
                            {/* Date */}
                            <div className="form-group">
                                <label>Fecha de inicio:</label>
                                <div className="input-group date">
                                    <div className="input-group-addon">
                                        <i className="fa fa-calendar" />
                                    </div>
                                    <input type="text" className="form-control pull-right" id="datepicker" />
                                </div>
                                {/* /.input group */}
                            </div>
                            {/* /.form group */}
                            {/* Date range */}
                            <div className="form-group">
                                <label>Fecha de fin:</label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-calendar" />
                                    </div>
                                    <input type="text" className="form-control pull-right" id="reservation" />
                                </div>
                                {/* /.input group */}
                            </div>
                            {/* /.form group */}
                            
                            {/* Date and time range */}
                            <div className="form-group">
                                <button className="btn btn-primary"><i className="fa fa-print" /> Imprimir</button>
                            </div>
                            {/* /.form group */}
                        </div>
                        {/* /.box-body */}
                    </div>
                    {/* /.box */}
                </div>
            </div>

        )
    }
}
