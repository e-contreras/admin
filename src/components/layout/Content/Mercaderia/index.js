import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Mercaderia extends Component {
    
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
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <table id="example1" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Código</th>
                                                    <th>Nombre</th>
                                                    <th>Categoría</th>
                                                    <th>Marca</th>
                                                    <th>Articulo</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>35003</td>
                                                    <td>Caloventilador Cecotec rw9700</td>
                                                    <td>Electrodméstico</td>
                                                    <td>Cecotec </td>
                                                    <td>Estufa</td>
                                                    <td>                                                         <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>                                                     </td>
                                                </tr>
                                                <tr>
                                                    <td>34046</td>
                                                    <td>Smart TV UHD 4K Samsung 65” 65NU7100</td>
                                                    <td>Televisores</td>
                                                    <td>Samsung</td>
                                                    <td>Televiso</td>
                                                    <td>                                                         <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>                                                     </td>
                                                </tr>
                                                <tr>
                                                    <td>34631</td>
                                                    <td>Robot Aspirador Conga 950</td>
                                                    <td>Cocina y Hogar</td>
                                                    <td>Conga</td>
                                                    <td>Aspirador</td>
                                                    <td>                                                         <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>                                                     </td>
                                                </tr>
                                                <tr>
                                                    <td>30656</td>
                                                    <td>Cafetera Oster® para Espresso y Capuccino TEM4188-053</td>
                                                    <td>Cocina y Hogar</td>
                                                    <td>Oster</td>
                                                    <td>Cafetera</td>
                                                    <td>                                                         <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>                                                     </td>
                                                </tr>
                                                <tr>
                                                    <td>26689</td>
                                                    <td>Bebedero Tokyo TOKBE801</td>
                                                    <td>Cocina y Hogar</td>
                                                    <td>Tokyo</td>
                                                    <td>Bebedero</td>
                                                    <td>                                                         <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>                                                     </td>
                                                </tr>
                                                <tr>
                                                    <td>29399</td>
                                                    <td>Afeitadora Philips HQ6904</td>
                                                    <td>Philips</td>
                                                    <td>Cuidado Masculino</td>
                                                    <td>Afeitadora</td>
                                                    <td>                                                         <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>                                                     </td>
                                                </tr>
                                                <tr>
                                                    <td>29628</td>
                                                    <td>Celular Samsung J1 Ace</td>
                                                    <td>Samsung</td>
                                                    <td>Celulares</td>
                                                    <td>Celular</td>
                                                    <td>                                                         <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>                                                     </td>
                                                </tr>
                                                <tr>
                                                    <td>32829</td>
                                                    <td>Celular Huawei P10</td>
                                                    <td>Huawei</td>
                                                    <td>Celulares</td>
                                                    <td>Celular</td>
                                                    <td>
                                                        <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>  
                                                        <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>40050</td>
                                                    <td>Lavarropas Whirlpool WLF600B25F</td>
                                                    <td>Whirlpool</td>
                                                    <td>Lavarropas</td>
                                                    <td>Lavarropa</td>
                                                    <td>                                                         <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>                                                     </td>
                                                </tr>
                                                <tr>
                                                    <td>32043</td>
                                                    <td>Licuadora Oster® Xpert Series™ Con Vaso de Vidrio Boroclass®
</td>
                                                    <td>Oster®</td>
                                                    <td>Cocina y Hogar</td>
                                                    <td>Licuadora</td>
                                                    <td>                                                         <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>                                                     </td>
                                                </tr>
                                                <tr>
                                                    <td>34631</td>
                                                    <td>Robot Aspirador Conga 950</td>
                                                    <td>Cocina y Hogar</td>
                                                    <td>Conga</td>
                                                    <td>Aspirador</td>
                                                    <td>                                                         <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>                                                     </td>
                                                </tr>
                                                <tr>
                                                    <td>30656</td>
                                                    <td>Cafetera Oster® para Espresso y Capuccino TEM4188-053</td>
                                                    <td>Cocina y Hogar</td>
                                                    <td>Oster</td>
                                                    <td>Cafetera</td>
                                                    <td>                                                         <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>                                                     </td>
                                                </tr>
                                                <tr>
                                                    <td>26689</td>
                                                    <td>Bebedero Tokyo TOKBE801</td>
                                                    <td>Cocina y Hogar</td>
                                                    <td>Tokyo</td>
                                                    <td>Bebedero</td>
                                                    <td>                                                         <button type="submit" class="btn btn-primary"><i class="fa fa-edit"></i></button>                                                           <button type="submit" class="btn btn-danger"><i class="fa fa-trash"></i></button>                                                     </td>
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
