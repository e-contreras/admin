import React, { Component } from 'react';
export default class Add extends Component {

    componentDidMount(){
        document.getElementById("menu-cotizaciones").classList.add("active");
        document.getElementById("mod-compras").style.display ="block !important";
    }

    render() {
        return (
            <div>
                {/* Main content */}
                <section className="content">
                    <div className="row">
                        {/* left column */}
                        <div className="col-md-12">
                            {/* general form elements */}
                            <div className="box">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Identificación de la solicitud</h3>
                                </div>
                                {/* /.box-header */}
                                {/* form start */}
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="box-body">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Descripción de la solicitud</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Pedido para reposición de celulares" />
                                                </div>
                                                {/* Date and time range */}
                                                <div className="form-group">
                                                    <label>Fecha de inicio y fin de la solicitud:</label>
                                                    <div className="input-group">
                                                        <div className="input-group-addon">
                                                            <i className="fa fa-clock-o" />
                                                        </div>
                                                        <input type="text" className="form-control pull-right" id="reservationtime" />
                                                    </div>
                                                    {/* /.input group */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* /.col */}
                                        <div className="col-md-6">
                                            <div className="box-body">
                                                <div className="form-group">
                                                    <label>Categorías</label>
                                                    <select className="form-control select2" multiple="multiple" data-placeholder="Seleccione categorías" style={{ width: '100%' }}>
                                                        <option>Electrodomésticos</option>
                                                        <option>Cuidado personal</option>
                                                        <option>Cosina</option>
                                                        <option>Jardin</option>
                                                        <option>Electrónica</option>
                                                        <option>Celulares</option>
                                                        <option>Televisores</option>
                                                    </select>
                                                </div>
                                                {/* /.form-group */}
                                                <div className="form-group">
                                                    <label>Estado</label>
                                                    <select className="form-control select2" style={{ width: '100%' }}>
                                                        <option selected="selected">Nuevo</option>
                                                        <option>Creado</option>
                                                        <option disabled="disabled">publicado (aún no se puede publicar la solicitud)</option>
                                                        <option>Cerrdo</option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/* /.form-group */}
                                        </div>
                                        {/* /.col */}
                                    </div>
                                    {/* /.box-body */}
                                    <div className="box-footer">
                                        <button type="submit" style={{ float: 'left' }} className="btn btn-primary">Guardar</button>
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
                        {/* /.row */}
                    </div></section>
                {/* /.content */}
            </div>
        )
    }
}
