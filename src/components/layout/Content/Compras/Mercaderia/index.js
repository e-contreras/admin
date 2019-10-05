import React, { Component } from 'react';
import ProductDatatable from './ProductDatatable';

export default class Mercaderia extends Component {

    constructor(props){
        super(props);
        this.handleAddMercaderia = this.handleAddMercaderia.bind(this);
    }
    
    handleAddMercaderia = () =>{
        this.props.history.push('/mercaderias/add');
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
                                        <div style={{float: "right"}}>
                                                <button className="btn btn-primary" onClick={this.handleAddMercaderia}>
                                                    <i className="fa fa-plus"></i> Nuevo</button>
                                        </div>
                                    </div>
                                
                                    {/* /.box-header */}
                                    <div className="box-body">
                                    <ProductDatatable />  
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
