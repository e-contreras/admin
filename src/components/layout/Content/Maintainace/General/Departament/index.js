import React, { Component } from 'react';
import DepartamentDataTable from './DepartamentDataTable';

const initialState = {
    show: false
};

export default class Departament extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
        this.handleHiddenPopup = this.handleHiddenPopup.bind(this);
    }

    handlerNewPopu(e) {
        e.preventDefault();
        this.setState({ show: true });
    }

    handleHiddenPopup(e) {
        this.setState({ show: !this.state.show });
    }

    cleanPopup(){
        this.setState(initialState);
    }

    render() {
        return (
            <div>
                <div>
                    {/* Main content */}
                    <section className="content">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Departamentos</h3>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <DepartamentDataTable />
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
            </div>
        )
    }
}
