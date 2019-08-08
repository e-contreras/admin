import React, { Component } from 'react'

export default class WorkOrder
 extends Component {
    
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }
    
    handleAdd = () =>{
        this.props.history.push('/com-not-remision/add');
    }

    render() {
        return (
            <div>
                {/* Main content */}
                <section className="content">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Asignar Empaque</h3>
                                        <div style={{float: "right"}}>
                                                <button className="btn btn-primary" onClick={this.handleAdd}>
                                                    <i className="fa fa-plus"></i> Nuevo</button>
                                        </div>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <table id="example1" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th># Orden</th>
                                                    <th>Cliente</th>
                                                    <th>RUC</th>
                                                    <th>Fecha de pedido</th>
                                                    <th>Fecha entrega pautada</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>123</td>
                                                    <td>3 V - INGENIERIA S.A.</td>
                                                    <td>80019709-7</td>
                                                    <td>12/10/20018 08:59</td>
                                                    <td></td>
                                                    <td>12/10/20018 08:59</td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>456</td>
                                                    <td>4 HERMANOS S.R.L</td>
                                                    <td>80075055-1</td>
                                                    <td>001-001-0000001</td>
                                                    <td></td>
                                                    <td>12/10/20018 08:59</td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>789</td>
                                                    <td>6 AG SOCIEDAD ANONIMA</td>
                                                    <td>80030979-0</td>
                                                    <td>001-001-0000032</td>
                                                    <td></td>
                                                    <td>12/10/20018 08:59</td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>987</td>
                                                    <td>6 DE MARZO SA</td>
                                                    <td>80029482-3</td>
                                                    <td>001-001-0000099</td>
                                                    <td></td>
                                                    <td>12/10/20018 08:59</td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>654</td>
                                                    <td>7 ENLACES SOCIEDAD ANONIMA</td>
                                                    <td>80046213-0</td>
                                                    <td>001-001-0000022</td>
                                                    <td>Remitir nota de débito por faltante de mercaderías</td>
                                                    <td>12/10/20018 08:59</td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>321</td>
                                                    <td>3 V - INGENIERIA S.A.</td>
                                                    <td>80019709-7</td>
                                                    <td>001-001-0000080</td>
                                                    <td>Remitir nota de débito por faltante de mercaderías</td>
                                                    <td>12/10/20018 08:59</td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>369</td>
                                                    <td>7 FALLS TRADING S.R.L.</td>
                                                    <td>80047655-7</td>
                                                    <td>001-001-0000001</td>
                                                    <td>Remitir nota de débito por faltante de mercaderías</td>
                                                    <td>12/10/20018 08:59</td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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
        )
    }
}
