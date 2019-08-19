import React, { Component } from 'react';

export default class PackageWorkOrder extends Component {

    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd = () => {
        this.props.history.push('/ven-not-remision/add');
    }

    render() {
        return (
            <div>
                <div>
                    <section className="content-header">
                        <h1>
                            Orden de trabajo
                                <small>#007612</small>
                        </h1>
                    </section>
                    <div className="pad margin no-print">
                    </div>
                    {/* Main content */}
                    <section className="invoice">
                        {/* title row */}
                        <div className="row">
                            <div className="col-xs-12">
                                <h2 className="page-header">
                                    <i className="fa fa-globe" /> ASIGNAR EMPAQUE
          <small className="pull-right">Fecha: 2/10/2018</small>
                                </h2>
                            </div>
                            {/* /.col */}
                        </div>
                        {/* info row */}
                        <div className="row invoice-info">

                            <div className="col-sm-4 invoice-col">
                                Para
        <address>
                                    <strong>Helena Wayne</strong><br />
                                    Féliz Pérez Cardozo 123<br />
                                    Lambaré, San Isidro<br />
                                    Telefono: (555) 539-1037<br />
                                    Email: helena.wayne@batman.com
        </address>
                            </div>
                            {/* /.col */}
                            <div className="col-sm-4 invoice-col">
                                <b>Factura pendiente de aprobación</b><br />
                                <br />
                                <b>ID del pedido:</b> 4F3S8J<br />
                                <b>Pago realizado:</b> 2/22/2014<br />
                                <b>Cuenta:</b> 968-34567
      </div>
                            {/* /.col */}

                            {/* /.col */}
                            <div className="col-sm-4 invoice-col">
                                <b>Asignar personal de depósito</b><br />
                                <br />
                                <div className="row">
                                    <div className="col-xs-6">
                                        <label for="pdeposito">
                                            Personal de deposito
                                        </label><br />
                                        <label for="fecha">
                                            Fecha
                                        </label><br /><br />
                                    </div>
                                    <div className="col-xs-6">
                                        <select>
                                            <option>Alfred Pennyworth</option>
                                        </select><br /><br />
                                        <input name="fecha" placeholder="01/01/2018 12:00" />
                                    </div>
                                </div>

                            </div>
                            {/* /.col */}

                        </div>
                        {/* /.row */}
                        {/* Table row */}
                        <div className="row">
                            <div className="col-xs-12 table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Candidad</th>
                                            <th>Producto</th>
                                            <th>Código</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Tv LG 32 LED HD</td>
                                            <td>34791</td>
                                            <td>TV de 32 pulgadas</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Play Station 4 </td>
                                            <td>34486</td>
                                            <td>Consola Play Station 4 - 1 Tb</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* /.col */}
                        </div>

                        {/* this row will not appear when printing */}
                        <div className="row no-print">
                            <div className="col-xs-12">
                                <a href="invoice-print.html" target="_blank" className="btn btn-default"><i className="fa fa-print" /> Imprimir</a>
                                <button type="button" className="btn btn-primary pull-right" style={{ marginRight: 5 }}>
                                    <i className="fa fa-save" /> Asignar
        </button>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        )
    }
}
