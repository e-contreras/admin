import React, { Component } from 'react'

export default class Pedido extends Component {

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
                
            </div>
        )
    }
}
