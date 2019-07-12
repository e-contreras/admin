import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar">
          {/* sidebar: style can be found in sidebar.less */}
          <section className="sidebar">
            {/* Sidebar user panel */}
            <div className="user-panel">
              <div className="pull-left image">
                <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
              </div>
              <div className="pull-left info">
                <p>Alexander Pierce</p>
                <a href="fake_url"><i className="fa fa-circle text-success" /> Online</a>
              </div>
            </div>
            {/* sidebar menu: : style can be found in sidebar.less */}
            <ul className="sidebar-menu" data-widget="tree">
              <li className="header">Menú de navegación</li>
              <li className="treeview menu-open">
                <a href="fake_url">
                  <i className="fa fa-shopping-cart"></i> <span>Compras</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><a href="index.html"><i className="fa fa-circle-o" />Mercaderías</a></li>
                  <li className="active"><a href="index2.html"><i className="fa fa-circle-o" /> Dashboard v2</a></li>
                </ul>
              </li>
              <li className="treeview">
                <a href="fake_url">
                  <i className="fa fa-credit-card"></i> <span>Ventas</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><a href="index.html"><i className="fa fa-circle-o" /> Dashboard v1</a></li>
                  <li className="active"><a href="index2.html"><i className="fa fa-circle-o" /> Dashboard v2</a></li>
                </ul>
              </li>
              <li className="treeview">
                <a href="fake_url">
                <i className="fa fa-truck"></i> <span>Lógistica</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><a href="index.html"><i className="fa fa-circle-o" /> Dashboard v1</a></li>
                  <li className="active"><a href="index2.html"><i className="fa fa-circle-o" /> Dashboard v2</a></li>
                </ul>
              </li>
            </ul>
          </section>
          {/* /.sidebar */}
        </aside>

      </div>
    )
  }
}
