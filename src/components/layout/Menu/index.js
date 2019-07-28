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
                <img src="/dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
              </div>
              <div className="pull-left info">
                <p>Alexander Pierce</p>
                <a href="fake_url"><i className="fa fa-circle text-success" /> Online</a>
              </div>
            </div>
            {/* sidebar menu: : style can be found in sidebar.less */}
            <ul className="sidebar-menu" data-widget="tree" >
              <li className="header">Menú de navegación</li>
              <li className="treeview" id="mod-compras">
                <a href="fake_url">
                  <i className="fa fa-shopping-cart"></i> <span>Compras</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li id="menu-mercaderias"><a href="/mercaderias"><i className="fa fa-circle-o" />Mercaderías</a></li>
                  <li id="menu-proveedores"><a href="/proveedores"><i className="fa fa-circle-o" />Proveedores</a></li>
                  <li id="menu-cotizaciones"><a href="/cotizaciones"><i className="fa fa-circle-o" />Cotizaciones</a></li>
                  <li id="menu-comp_nota_remision"><a href="/com-not-remision"><i className="fa fa-circle-o" />Notas de remisión</a></li>
                  <li id="menu-comp_not_credito"><a href="/com-not-credito"><i className="fa fa-circle-o" />Notas de crédito</a></li>
                  <li id="menu-comp_not_debito"><a href="/comp_not_debito"><i className="fa fa-circle-o" />Notas de débito</a></li>
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
