import React, { Component } from 'react'

export default class Cotizacion extends Component {
    
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }
    
    handleAdd = () =>{
        this.props.history.push('/cotizaciones/add');
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
                                    <h3 className="box-title">List de mercaderías</h3>
                                    <div style={{ float: "right" }}>
                                        <button className="btn btn-primary" onClick={this.handleAdd}>
                                            <i className="fa fa-plus"></i> Nuevo</button>
                                    </div>
                                </div>
                                {/* /.box-header */}
                                <div className="box-body">
                                    <table id="example1" className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>Código</th>
                                                <th>Descripción</th>
                                                <th>Categoría</th>
                                                <th>F. publicación</th>
                                                <th>Estado</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>3</td>
                                                <td>Pedido de Placares</td>
                                                <td>Electrodméstico</td>
                                                <td>12-03-19</td>
                                                <td>
                                                    <span className="label label-warning">Cerrado</span>
                                                </td>
                                                <td><button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>                                                     </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Pedido de Bicicletas</td>
                                                <td>Deportes</td>
                                                <td>11-05-19</td>
                                                <td>
                                                    <span className="label label-primary">Abierto</span>
                                                </td>
                                                <td><button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>                                                     </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Pedido de Electrodmésticos</td>
                                                <td>Electrodméstico</td>
                                                <td>12-05-19</td>
                                                <td>
                                                    <span className="label label-default">Creado</span>
                                                </td>
                                                <td><button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>                                                     </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Pedido de Electrodmésticos</td>
                                                <td>Electrodméstico</td>
                                                <td>12-05-19</td>
                                                <td>
                                                    <span className="label label-success">Finalizado</span>
                                                </td>
                                                <td><button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>                                                     </td>
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
