import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Content extends Component {

    state = {
        breadcrumb : [],
        module: '',
        section: '',
    }
    
    static propTypes = {
        children: PropTypes.element.isRequired,
        module: PropTypes.string.isRequired,
        section: PropTypes.string.isRequired,
        breadcrumb: PropTypes.array.isRequired
    };

    componentDidMount(){
        this.initSectionAndBreadcrum();
    }

    componentDidUpdate(){
        
    }

    render() {
        const {
            children,
        } = this.props;

        return (
            <div>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <h1>
                            {this.state.module} <small>{this.state.section}</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="/"><i class="fa fa-dashboard"></i> Home</a></li>
                            {this.state.breadcrumb}
                        </ol>
                    </section>
                    {children}
                </div>
                {/* /.content-wrapper */}
                {/* page script */}
            </div>

        )
    }

    initSectionAndBreadcrum = () => {
        let currentLocation = window.location;
        let childrens = this.props.children.props.children;
        for (let index = 0; index < childrens.length; index++) {
            const element = childrens[index];
            if(element.props.path.includes(currentLocation.pathname)){
                this.setState({
                    breadcrumb:this.buildBreadCumb(element),
                    section: element.section,
                    module: element.module,
                });
            }
        }
    }



    buildBreadCumb(subChild) {
    
        let ulist = [];
        let bre = subChild.props.breadcrumb;
        if (bre) {
            let breLength = bre.length > 0 ? bre.length - 1 : 0;

            for (let index = 0; index < breLength; index++) {
                ulist.push(<li><a href="fake_url">{bre[index]}</a></li>);
            }

            ulist.push(<li className="active">{bre[breLength]}</li>);
        }

        return ulist;
    }

}
