import React, { Component } from 'react';


export default class Mercaderia extends Component {

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
                                        <h3 className="box-title">List de Proveedores</h3>
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
                                                    <th>Razón Social</th>
                                                    <th>RUC</th>
                                                    <th>Persona cont.</th>
                                                    <th>Dirección</th>
                                                    <th>Email</th>
                                                    <th>Teléfono</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>3 V - INGENIERIA S.A.</td>
                                                    <td>80019709-7</td>
                                                    <td>ADOLFO VERA ALDERETE - JUAN MANUEL VERA CAMPUZANO.</td>
                                                    <td>R. I. 5 GRAL. DÍAZ N° 351 C/ CAMPO CERVERA.</td>
                                                    <td>claudgomez.gomez1@gmail.com</td>
                                                    <td>021 665 177</td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>4 HERMANOS S.R.L</td>
                                                    <td>80075055-1</td>
                                                    <td>Nicolas Eduardo Saavedra - Sebastian Saavedra</td>
                                                    <td>DELFIN CHAMORRO CASI AVDA. SANTA TERESA Casa #2221</td>
                                                    <td>licitaciones4h@outlook.com</td>
                                                    <td>021 665 177</td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>6 AG SOCIEDAD ANONIMA</td>
                                                    <td>80030979-0</td>
                                                    <td>Gerardo III Torcida Insfran - Myriam Benitez Torcida</td>
                                                    <td>Teniente Moreno c/ Artigas</td>
                                                    <td>claudgomez.gomez1@gmail.com</td>
                                                    <td>283909 210134</td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>6 DE MARZO SA</td>
                                                    <td>80029482-3</td>
                                                    <td>HERIBERTO GALEANO ROJAS - GUSTAVO E. RIVEROS</td>
                                                    <td>JOSE DAVALOS Y PERALTA CASI PIKYSYRY #817</td>
                                                    <td>6marzo.sa@gmail.com</td>
                                                    <td>904149</td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>7 ENLACES SOCIEDAD ANONIMA</td>
                                                    <td>80046213-0</td>
                                                    <td>HERMINIO ESTEBAN ACHUCARRO ZELADA</td>
                                                    <td>FALCON, JOSE Casa #118</td>
                                                    <td>consultora.7e@gmail.com</td>
                                                    <td>391134</td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3 V - INGENIERIA S.A.</td>
                                                    <td>80019709-7</td>
                                                    <td>ADOLFO VERA ALDERETE - JUAN MANUEL VERA CAMPUZANO.</td>
                                                    <td>R. I. 5 GRAL. DÍAZ N° 351 C/ CAMPO CERVERA.</td>
                                                    <td>claudgomez.gomez1@gmail.com</td>
                                                    <td>021 665 177</td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>7 FALLS TRADING S.R.L.</td>
                                                    <td>80047655-7</td>
                                                    <td>HECTOR FABIAN FERNANDEZ DAMEN</td>
                                                    <td>AV. PARAGUAY 1073 c/ Mujeres Paraguayas</td>
                                                    <td>7falls@gmail.com</td>
                                                    <td>046 242 911</td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>
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
