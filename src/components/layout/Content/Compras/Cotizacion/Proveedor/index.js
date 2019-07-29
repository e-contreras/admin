import React, { Component } from 'react';
import './style.css';

export default class Proveedor extends Component {
    
    constructor(props){
        super(props);
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
                                        <h3 className="box-title">Pedido de cotización 3</h3>
                                        <div style={{float: "right"}}>
                                                <button className="btn btn-primary" onClick={this.handleAddMercaderia}>
                                                    <i className="fa fa-envelope"></i> Enviar</button>
                                        </div>
                                        <div>
                                            <strong>Pedido de Electrodméstico:</strong><br />
                                            <strong>Fecha de inicio:</strong> 10/03/2019<br />
                                            <strong>Fecha de fin:</strong> 10/04/2019

                                        </div>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <table id="example1" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Código</th>
                                                    <th>Nombre</th>
                                                    <th>Marca</th>
                                                    <th>Cant. sol</th>
                                                    <th>Cant. prop</th>
                                                    <th>Precio unitario</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>35003</td>
                                                    <td>Caloventilador Cecotec rw9700</td>
                                                    <td>Cecotec </td>
                                                    <td className="input-number">10</td>
                                                    <td>
                                                        <div class="form-group">
                                                          <input type="text" class="form-control input-number input-cantidad" placeholder="20" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-group" >
                                                            <input type="text" class="form-control input-number" placeholder="200.000" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary btn-sm">
                                                            <i class="fa fa-edit"></i>
                                                        </button> 
                                                        &nbsp;
                                                        <button type="submit" class="btn btn-danger btn-sm">
                                                            <i class="fa fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>34046</td>
                                                    <td>Smart TV UHD 4K Samsung 65” 65NU7100</td>
                                                    <td>Samsung</td>
                                                    <td className="input-number">10</td>
                                                    <td>
                                                        <div class="form-group">
                                                          <input type="text" class="form-control input-number input-cantidad" placeholder="20" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-group" >
                                                            <input type="text" class="form-control input-number" placeholder="200.000" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary btn-sm">
                                                            <i class="fa fa-edit"></i>
                                                        </button> 
                                                        &nbsp;
                                                        <button type="submit" class="btn btn-danger btn-sm">
                                                            <i class="fa fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>34631</td>
                                                    <td>Robot Aspirador Conga 950</td>
                                                    <td>Conga</td>
                                                    <td className="input-number">10</td>
                                                    <td>
                                                        <div class="form-group">
                                                          <input type="text" class="form-control input-number input-cantidad" placeholder="20" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-group" >
                                                            <input type="text" class="form-control input-number" placeholder="200.000" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary btn-sm">
                                                            <i class="fa fa-edit"></i>
                                                        </button> 
                                                        &nbsp;
                                                        <button type="submit" class="btn btn-danger btn-sm">
                                                            <i class="fa fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>29399</td>
                                                    <td>Afeitadora Philips HQ6904</td>
                                                    <td>Philips</td>
                                                    <td className="input-number">10</td>
                                                    <td>
                                                        <div class="form-group">
                                                          <input type="text" class="form-control input-number input-cantidad" placeholder="20" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-group" >
                                                            <input type="text" class="form-control input-number" placeholder="200.000" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary btn-sm">
                                                            <i class="fa fa-edit"></i>
                                                        </button> 
                                                        &nbsp;
                                                        <button type="submit" class="btn btn-danger btn-sm">
                                                            <i class="fa fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>29628</td>
                                                    <td>Celular Samsung J1 Ace</td>
                                                    <td>Samsung</td>
                                                    <td className="input-number">10</td>
                                                    <td>
                                                        <div class="form-group">
                                                          <input type="text" class="form-control input-number input-cantidad" placeholder="20" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-group" >
                                                            <input type="text" class="form-control input-number" placeholder="200.000" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary btn-sm">
                                                            <i class="fa fa-edit"></i>
                                                        </button> 
                                                        &nbsp;
                                                        <button type="submit" class="btn btn-danger btn-sm">
                                                            <i class="fa fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>32829</td>
                                                    <td>Celular Huawei P10</td>
                                                    <td>Huawei</td>
                                                    <td className="input-number">10</td>
                                                    <td>
                                                        <div class="form-group">
                                                          <input type="text" class="form-control input-number input-cantidad" placeholder="20" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-group" >
                                                            <input type="text" class="form-control input-number" placeholder="200.000" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary btn-sm">
                                                            <i class="fa fa-edit"></i>
                                                        </button> 
                                                        &nbsp;
                                                        <button type="submit" class="btn btn-danger btn-sm">
                                                            <i class="fa fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>40050</td>
                                                    <td>Lavarropas Whirlpool WLF600B25F</td>
                                                    <td>Whirlpool</td>
                                                    <td className="input-number">10</td>
                                                    <td>
                                                        <div class="form-group">
                                                          <input type="text" class="form-control input-number input-cantidad" placeholder="20" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-group" >
                                                            <input type="text" class="form-control input-number" placeholder="200.000" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary btn-sm">
                                                            <i class="fa fa-edit"></i>
                                                        </button> 
                                                        &nbsp;
                                                        <button type="submit" class="btn btn-danger btn-sm">
                                                            <i class="fa fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>32043</td>
                                                    <td>Licuadora Oster® Xpert Series™ Con Vaso de Vidrio Boroclass®</td>
                                                    <td>Oster®</td>
                                                    <td className="input-number">10</td>
                                                    <td>
                                                        <div class="form-group">
                                                          <input type="text" class="form-control input-number input-cantidad" placeholder="20" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-group" >
                                                            <input type="text" class="form-control input-number" placeholder="200.000" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary btn-sm">
                                                            <i class="fa fa-edit"></i>
                                                        </button> 
                                                        &nbsp;
                                                        <button type="submit" class="btn btn-danger btn-sm">
                                                            <i class="fa fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>30656</td>
                                                    <td>Cafetera Oster® para Espresso y Capuccino TEM4188-053</td>
                                                    <td>Cocina y Hogar</td>
                                                    <td className="input-number">10</td>
                                                    <td>
                                                        <div class="form-group">
                                                          <input type="text" class="form-control input-number input-cantidad" placeholder="20" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-group" >
                                                            <input type="text" class="form-control input-number" placeholder="200.000" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary btn-sm">
                                                            <i class="fa fa-edit"></i>
                                                        </button> 
                                                        &nbsp;
                                                        <button type="submit" class="btn btn-danger btn-sm">
                                                            <i class="fa fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>26689</td>
                                                    <td>Bebedero Tokyo TOKBE801</td>
                                                    <td>Cocina y Hogar</td>
                                                    <td className="input-number">10</td>
                                                    <td>
                                                        <div class="form-group">
                                                          <input type="text" class="form-control input-number input-cantidad" placeholder="20" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-group" >
                                                            <input type="text" class="form-control input-number" placeholder="200.000" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary btn-sm">
                                                            <i class="fa fa-edit"></i>
                                                        </button> 
                                                        &nbsp;
                                                        <button type="submit" class="btn btn-danger btn-sm">
                                                            <i class="fa fa-trash"></i>
                                                        </button>
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
