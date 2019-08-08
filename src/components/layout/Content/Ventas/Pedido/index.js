import React, { Component } from 'react'

export default class Pedido extends Component {

    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }
    
    handleAdd = () =>{
        this.props.history.push('/ven-pedido/ven-approve');
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
                                        <h3 className="box-title">Pedidos</h3>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <table id="example1" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Cliente</th>
                                                    <th>Medio de pago</th>
                                                    <th>Estado</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>456</td>
                                                    <td>Jason Todd</td>
                                                    <td>Transferencia</td>
                                                    <td><span className="label label-warning">Pendiente de aprobación</span></td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary" onClick={this.handleAdd}><i class="fa fa-edit"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>123</td>
                                                    <td>Dick Grayson</td>
                                                    <td>Transferencia</td>
                                                    <td><span className="label label-success">Aprobado</span></td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary"  onClick={this.handleAdd}><i class="fa fa-edit"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>567</td>
                                                    <td>Tim Drake</td>
                                                    <td>TC</td>
                                                    <td></td>
                                                    <td>
                                                        
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>321</td>
                                                    <td>Damian Wayne</td>
                                                    <td>TC</td>
                                                    <td></td>
                                                    <td>
                                                        
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>654</td>
                                                    <td> Carrie Kelley</td>
                                                    <td>Transferencia</td>
                                                    <td><span className="label label-danger">Rechazado</span></td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary" onClick={this.handleAdd}><i class="fa fa-edit"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>741</td>
                                                    <td>Stephanie Brown</td>
                                                    <td>Transferencia</td>
                                                    <td><span className="label label-success">Aprobado</span></td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary" onClick={this.handleAdd}><i class="fa fa-edit"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>147</td>
                                                    <td>Helena Wayne</td>
                                                    <td>Transferencia</td>
                                                    <td><span className="label label-success">Aprobado</span></td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary" onClick={this.handleAdd}><i class="fa fa-edit"></i></button>
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
