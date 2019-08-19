import React, { Component } from 'react'

export default class Undelibered extends Component {

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
                    {/* Main content */}
                    <section className="invoice">
                        {/* title row */}
                        <div className="row">
                            <div className="col-xs-12">
                                <h2 className="page-header">
                                    <i className="fa fa-globe" /> ASIGNAR PERSONAL DE TRANSPORTE
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
                                <b>Pedido</b><br />
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
                        
                    </section>
                    <section className="invoice">
                        <div className="box-header ui-sortable-handle">
                            <h3><i className="fa fa-envelope"></i> Remisiones no Entregadas</h3>
                            <form action="#" method="post">
                                <div className="form-group">
                                    <select className="form-control">
                                        <option>Dirección incorrecta</option>
                                    </select>
                                </div>
                                <div>
                                    <textarea className="textarea" style={{ width: '100%', height: 125, fontSize: 14, lineHeight: 18, border: '1px solid rgb(221, 221, 221)', padding: 10, display: 'none' }} placeholder="Message" defaultValue={""} />
                                </div>
                                <button type="button" className="btn btn-primary pull-right" style={{ marginRight: 5 }}>
                                    <i className="fa fa-save" /> Registrar
        </button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
