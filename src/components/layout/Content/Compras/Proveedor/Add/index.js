import React, { Component } from 'react'

export default class Add extends Component {
    render() {
        return (
            <div>
                {/* Main content */}
                <section className="content">
                    <div className="row">
                        {/* left column */}
                        <div className="col-md-12">
                            {/* general form elements */}
                            <div className="box box-primary">
                                {/* /.box-header */}
                                {/* form start */}
                                <form>
                                    <div className="box-body">
                                        <div className="form-group">
                                            <label htmlFor="rsocial">Razón social</label>
                                            <input type="text" className="form-control" id="rsocial" placeholder="Proveedor SRL" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="ruc">RUC</label>
                                            <input type="text" className="form-control" id="ruc" placeholder="80046800-0" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="pcontacto">Persona de contacto</label>
                                            <input type="text" className="form-control" id="pcontacto" placeholder="John Wick" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="telefono">Teléfono</label>
                                            <input type="text" className="form-control" id="telefono" placeholder="02142619" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Persona de contacto</label>
                                            <input type="email" className="form-control" id="email" placeholder="email@domain.com" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Dirección</label>
                                            <input type="direccion" className="form-control" id="direccion" placeholder="Felix P. Cardozo C/ Emiliano R. Fernandez" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="ciudad">Ciudad</label>
                                            <select className="form-control" id="ciudad">
                                                <option>Asunción</option>
                                                <option>Luque</option>
                                                <option>Lambaré</option>
                                                <option>Villa Elisa</option>
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
                                    </div>
                                    {/* /.box-body */}
                                    <div className="box-footer">
                                        <button type="submit" className="btn btn-primary">Guardar</button>
                                    </div>
                                </form>
                            </div>
                            {/* /.box */}
                        </div>
                    </div></section>

            </div>

        )
    }
}
