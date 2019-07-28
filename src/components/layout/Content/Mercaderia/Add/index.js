import React, { Component } from 'react'

export default class Add extends Component {
    render() {
        return (
            <div>
                {/* Main content */}
                <section className="content">
                    <div className="row">
                        {/* left column */}
                        <div className="col-md-7">
                            {/* general form elements */}
                            <div className="box box-primary">
                                {/* /.box-header */}
                                {/* form start */}
                                <form role="form">
                                    <div className="box-body">
                                        <div className="form-group">
                                            <label htmlFor="codigo">Código</label>
                                            <input type="text" className="form-control" id="codigo" placeholder="0001" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="mercaderia">Mercadería</label>
                                            <input type="text" className="form-control" id="mercaderia" placeholder="Lavarropa LG" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="modelo">Modelo</label>
                                            <input type="text" className="form-control" id="modelo" placeholder="XD618" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="marca">Marca</label>
                                            <select className="form-control" id="marca">
                                                <option>Arno</option>
                                                <option>LG</option>
                                                <option>Philips</option>
                                                <option>Wirpool</option>
                                                <option>Black and decker</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="categoria">Categoria</label>
                                            <select multiple className="form-control" id="categoria">
                                                <option>Electrónica</option>
                                                <option>Electrodméticos</option>
                                                <option>Muebles</option>
                                                <option>Cosina</option>
                                                <option>Cuidado personal</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="imagen-producto">Imagen principal del producto</label>
                                            <input type="file" id="imagen-producto" />
                                            <p className="help-block">Seleccione una imagen que ayude a identificar el producto</p>
                                        </div>
                                    </div>
                                    {/* /.box-body */}
                                    <div className="box-footer">
                                        <button type="submit" className="btn btn-primary">Guardar</button>
                                    </div>
                                </form>
                            </div>
                            {/* /.box */}
                        </div>
                        <div className="col-md-5 box-body">
                            <div className="box">
                                <img className="img-responsive pad" src="../../dist/img/photo2.png" alt="Photo" />
                            </div>
                        </div>
                    </div></section>

            </div>

        )
    }
}
