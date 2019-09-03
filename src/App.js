import React, { Component } from 'react'
import Header from './components/layout/Header';
import Menu from './components/layout/Menu'
import Footer from './components/layout/Footer'
import Content from './components/layout/Content/Index';
import Login from './components/Login';


export default class App extends Component {

  render() {
    const { children } = this.props;
    var token = JSON.parse(localStorage.getItem("token"));
    var isLoggedIn = (token != undefined && token.expires_in != undefined && token.expires_in > 0) ? true : false;

    return (
      <div>
        {isLoggedIn ? (
          <div>
            <Header />
            <Menu />
            <Content breadcrumb={children.props.breadcrumb} section={children.props.section} module={children.props.module}>
              {children}
            </Content>
            <Footer />
          </div>
        ) : (
            <Login />
          )}
      </div>
    )
  }
}
