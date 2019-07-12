import React, { Component } from 'react'
import Header from './components/layout/Header';
import Menu from './components/layout/Menu'
import Footer from './components/layout/Footer'
import Content from './components/layout/Content/Index';
import PropTypes from 'prop-types';


export default class App extends Component {

  propTypes = {
    children: PropTypes.element.isRequired,
    breadcrumb: PropTypes.array.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        <Menu />
        <Content breadcrumb={children.props.breadcrumb} section={children.props.section} module={children.props.module}>
          {children}
        </Content>
        <Footer />
      </div>
    )
  }
}
