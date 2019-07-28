import React, { Component } from 'react';
import './style.css'

export default class Add extends Component {
    render() {
        return (
            <div>
                {/* Main content */}
                <section className="content">
                    <div className="row">
                        {/* left column */}
                        <div className="col-md-12">
                            {/* general form elements */}
                            <div className="box box-primary">
                                {/* /.box-header */}
                                {/* form start */}
                                <form role="form">
                                    <div className="box-body">

                                        {/* Datos del proveedor */}
                                        <div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="rsocial">Razón social</label>
                                                        <input type="text" className="form-control" id="rsocial" placeholder="Proveedor SRL" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="not-remision">RUC</label>
                                                        <input type="text" className="form-control" id="not-remision" placeholder="80046800-0" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="ruc">Nro de Nota de crédito</label>
                                                        <input type="text" className="form-control" id="ruc" placeholder="80046800-0" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Fin de Datos del proveedor */}

                                        {/* Datos de Translado */}
                                        <div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="rsocial">Nro. de factura</label>
                                                        <input type="text" className="form-control" id="rsocial" placeholder="001-001-0000007" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="not-remision">Timbrado</label>
                                                        <input type="text" className="form-control" id="not-remision" placeholder="10586496" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="ruc">Fecha de recepción</label>
                                                        <input type="text" className="form-control" id="ruc" placeholder="01/01/2019" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label for="comentarios">Comentarios</label><br />
                                                        <textarea className="boxsizingBorder" id="comentarios" name="comentarios" rows="5">
                                                            Remitir nota de débito solicitando crédito por mercaderías en mal estado
                                                        </textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Fin de Datos del proveedor */}
                                    </div>
                                    {/* /.box-body */}
                                    <div className="box-footer">
                                        <button type="submit" className="btn btn-primary">Guardar</button>
                                    </div>
                                </form>
                            </div>
                            {/* /.box */}

                            {/* Form Element sizes */}
                            <div className="box">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Agregar detalle</h3>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        <div className=" col-md-2">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-hashtag" /></span>
                                                <input type="text" className="form-control" placeholder="Cantidad" />
                                            </div>
                                        </div>
                                        <div className=" col-md-4">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-mobile-phone" /></span>
                                                <input type="text" className="form-control" placeholder="Concepto" />
                                            </div>
                                        </div>
                                        <div className=" col-md-3">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-dollar" /></span>
                                                <input type="text" className="form-control" placeholder="Monto" />
                                            </div>
                                        </div>
                                        <div className=" col-md-2">
                                            <div className="input-group">
                                                <select className="form-control">
                                                    <option>Tipo de gravadas</option>
                                                    <option>IVA 10%</option>
                                                    <option>IVA 5%</option>
                                                    <option>Exenta</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className=" col-md-1">
                                            <div className="input-group">
                                                <button type="submit" style={{ float: 'left' }} className="btn btn-primary"><i className="fa fa-plus" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /.box-body */}
                            </div>
                            {/* /.box */}
                            <div className="box">
                                <div className="box-header">
                                    <h3 className="box-title">Mercaderías agregadas al pedido</h3>
                                    <div className="box-tools">
                                        <div className="input-group input-group-sm" style={{ width: 150 }}>
                                            <input type="text" name="table_search" className="form-control pull-right" placeholder="Search" />
                                            <div className="input-group-btn">
                                                <button type="submit" className="btn btn-default"><i className="fa fa-search" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <div className="box-body table-responsive no-padding">
                                                <table className="table table-hover">
                                                    <tbody>
                                                        <tr>
                                                            <th>Cantidad</th>
                                                            <th>Concepto</th>
                                                            <th>Monto</th>
                                                            <th>Gravadas</th>
                                                            <th>Acción</th>
                                                        </tr>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Por faltante de mercaderías</td>
                                                            <td>300.000</td>
                                                            <td>27.2033</td>
                                                            <td>
                                                                <button type="submit" className="btn btn-primary"><i className="fa fa-edit" /></button>
                                                                <button type="submit" className="btn btn-danger"><i className="fa fa-trash" /></button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td><strong>Total grabadas (IVA):</strong></td>
                                                            <td>27.2033</td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                            {/* /.box-body */}
                                            {/* /.box */}
                                        </div>
                                    </div>
                                </div>
                                {/* /.box-body */}
                            </div>
                            {/* /.box */}




                        </div>
                    </div></section>

            </div>

        )
    }
}
