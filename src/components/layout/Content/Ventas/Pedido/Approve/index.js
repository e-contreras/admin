import React, { Component } from 'react'

export default class Pedido extends Component {

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
                            Aprobación de pedido
                                <small>#007612</small>
                        </h1>
                    </section>
                    <div className="pad margin no-print">
                        <div className="callout callout-info" style={{ marginBottom: '0!important' }}>
                            <h4><i className="fa fa-info" /> Nota:</h4>
                            Antes de aprobar. Corrobore la documentación remitida por el cliente contra el número de transacción en bancos correspondientes.
    </div>
                    </div>
                    {/* Main content */}
                    <section className="invoice">
                        {/* title row */}
                        <div className="row">
                            <div className="col-xs-12">
                                <h2 className="page-header">
                                    <i className="fa fa-globe" /> E-CONTRERAS S.R.L.
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
                                            <th>Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Tv LG 32 LED HD</td>
                                            <td>34791</td>
                                            <td>TV de 32 pulgadas</td>
                                            <td>₲. 1.416.000</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Play Station 4 </td>
                                            <td>34486</td>
                                            <td>Consola Play Station 4 - 1 Tb</td>
                                            <td>₲. 3.020.000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                        <div className="row">
                            {/* accepted payments column */}
                            <div className="col-xs-6">
                                <p className="lead">Información adicional provehída por el cliente:</p>
                                <p className="text-muted well well-sm no-shadow" style={{ marginTop: 10 }}>
                                    Loren ipsum dolor
                                </p>
                            </div>
                            {/* /.col */}
                            <div className="col-xs-6">
                                <p className="lead">Fecha de pago 2/22/2018</p>
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody><tr>
                                            <th style={{ width: '50%' }}>Subtotal:</th>
                                            <td>₲.‭ 4.436.000‬</td>
                                        </tr>
                                            <tr>
                                                <th>Iva 10%</th>
                                                <td>₲.‭ 403.273</td>
                                            </tr>
                                            <tr>
                                                <th>Total:</th>
                                                <td>₲.‭ 4.436.000</td>
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                        {/* this row will not appear when printing */}
                        <div className="row no-print">
                            <div className="col-xs-12">
                                <a href="invoice-print.html" target="_blank" className="btn btn-default"><i className="fa fa-print" /> Print</a>
                                <button type="button" className="btn btn-success pull-right"><i className="fa fa-credit-card" /> Aprobar pago
        </button>
                                <button type="button" className="btn btn-primary pull-right" style={{ marginRight: 5 }}>
                                    <i className="fa fa-download" /> Descargar documento
        </button>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        )
    }
}
