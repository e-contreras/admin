import React, { Component } from 'react';
import Header from '../Header';
import Menu from '../Menu'
import Footer from '../Footer'
import Content from '../Content/Index';
import Login from '../../Login';

export default class Wrapper extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isLoggedIn: false
        }
    }

    componentWillMount() {
        var token = JSON.parse(localStorage.getItem("token"));
        this.setState({ isLoggedIn: (token !== undefined && token !== null && token.expires_in !== undefined && token.expires_in > 0) ? true : false });
    }

    render() {
        const { children } = this.props;
        return (
            <div>
                {/* {this.state.isLoggedIn ? ( */}
                    <div>
                        <Header />
                        <Menu />
                        <Content>
                            {children}
                        </Content>
                        <Footer />
                    </div>
                {/* ) : ( */}
                        {/* <Login /> */}
                    {/* )} */}
            </div>
        )
    }
}
