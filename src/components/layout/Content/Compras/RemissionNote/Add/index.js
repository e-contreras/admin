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
                                <form>
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
                                                        <label htmlFor="ruc">Nro de Nota de remisión</label>
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
                                                        <label htmlFor="rsocial">Nro. de comprobante de ventas</label>
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
                                    <h3 className="box-title">Buscar mercaderías</h3>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        <div className=" col-md-10">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-mobile-phone" /></span>
                                                <input type="text" className="form-control" placeholder="Celular samsung" />
                                            </div>
                                        </div>
                                        <div className=" col-md-2">
                                            <div className="input-group">
                                                <button type="submit" style={{ float: 'left' }} className="btn btn-primary"><i className="fa fa-search" />
                                                    Buscar</button>
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <table className="table table-condensed">
                                                        <thead>
                                                            <tr><th>CÓDIGO</th>
                                                                <th>DESCRIPCIÓN</th>
                                                                <th>Existencia actual</th>
                                                                <th>CANTIDAD</th>
                                                                <th>ACCIONES</th>
                                                            </tr></thead>
                                                        <tbody>
                                                            <tr><td>26689</td>
                                                                <td>Bebedero Tokyo TOKBE801 </td>
                                                                <td style={{ textAlign: 'center' }}>5</td>
                                                                <td>
                                                                    <div className="input-group">
                                                                        <input type="text" className="form-control" placeholder={20} />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <button type="submit" style={{ float: 'left' }} className="btn btn-primary"><i className="fa fa-plus" /></button>
                                                                </td>
                                                            </tr></tbody>
                                                    </table>
                                                </div>
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
                                                            <th>CÓDIGO</th>
                                                            <th>NOMBRE</th>
                                                            <th>MARCA</th>
                                                            <th>ARTICULO</th>
                                                            <th>CANTIDA</th>
                                                            <th>ACCIONES</th>
                                                        </tr>
                                                        <tr>
                                                            <td>29399</td>
                                                            <td>Afeitadora Philips HQ6904</td>
                                                            <td>Philips</td>
                                                            <td>Afeitadora</td>
                                                            <td>10</td>
                                                            <td>
                                                                <button type="submit" className="btn btn-primary"><i className="fa fa-edit" /></button>
                                                                <button type="submit" className="btn btn-danger"><i className="fa fa-trash" /></button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
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
