import React, { Component } from 'react'
import Wrapper from './components/layout/Wrapper';

export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <Wrapper>
        {children}
      </Wrapper>
    )
  }
}
