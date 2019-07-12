import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Content extends Component {

    static propTypes = {
        children: PropTypes.element.isRequired,
        module: PropTypes.string.isRequired,
        section: PropTypes.string.isRequired,
        breadcrumb: PropTypes.array.isRequired
    };

    render() {
        
        const { 
            children,
            module,
            section
         } = this.props;


        return (
            <div>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <h1>
                            {module} <small>{section}</small>
                        </h1>
                        <ol className="breadcrumb">
                        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                            {this.createBreadcrumb()}
                        </ol>
                    </section>
                    { children }
                </div>
                {/* /.content-wrapper */}
                {/* page script */}
            </div>

        )
    }

    createBreadcrumb = () => {

        let ulist = [];
        let bre = this.props.breadcrumb;
        let breLength = bre.length -1;
        

        for (let index = 0; index < breLength ; index++) {
            ulist.push(<li><a href="#">{bre[index]}</a></li>);
        }
        
        ulist.push(<li className="active">{bre[breLength]}</li>);

        return ulist;
    }

}
