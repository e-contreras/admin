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
                <img src="/dist/img/user.png" className="img-circle" alt="user"/>
              </div>
              <div className="pull-left info">
                <p>Jhon Doe</p>
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
                  <li id="menu-comp_not_debito"><a href="/com-not-debito"><i className="fa fa-circle-o" />Notas de débito</a></li>
                  <li id="menu-comp_gen_lib"><a href="/com-gen-lib-compras"><i className="fa fa-circle-o" />Generar Libro de compras</a></li>
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
                  <li><a href="/ven-pedidos"><i className="fa fa-circle-o" />Pedidos</a></li>
                  <li><a href="/ven-not-credito"><i className="fa fa-circle-o" />Nota de crédito</a></li>
                  <li><a href="/ven-not-debito"><i className="fa fa-circle-o" />Nota de débito</a></li>
                  <li><a href="/ven-gen-lib-ventas"><i className="fa fa-circle-o" />Libro de ventas</a></li>
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
                  <li><a href="/log-empaquetar"><i className="fa fa-circle-o" />Asignar empaque</a></li>
                  <li><a href="/log-transporte"><i className="fa fa-circle-o" />Asignar Transporte</a></li>
                  <li><a href="/log-list-not-remision/list"><i className="fa fa-circle-o" />Generar Not. remisión</a></li>
                  <li><a href="index2.html"><i className="fa fa-circle-o" />Registrar eventos de OT</a></li>
                </ul>
              </li>
              <li className="treeview">
                <a href="fake_url">
                <i className="fa fa-briefcase"></i> <span>Seguridad y acceso</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><a href="fake_url"><i className="fa fa-circle-o" />Usuarios</a></li>
                  <li><a href="fake_url"><i className="fa fa-circle-o" />Roles</a></li>
                  <li><a href="index2.html"><i className="fa fa-circle-o" />Pantallas</a></li>
                </ul>
              </li>
              <li className="treeview">
                <a href="fake_url">
                <i className="fa fa-gear"></i> <span>Mantenimiento</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><a href="fake_url">
                    <i className="fa fa-circle-o" />Genearl</a>
                    <ul>
                      <li><a href="fake_url">Departamentos</a></li>
                      <li><a href="fake_url">Ciudades</a></li>
                      <li><a href="index2.html">Barrios</a></li>
                    </ul>
                  </li>
                  <li><a href="fake_url">
                    <i className="fa fa-circle-o" />Compras</a>
                    <ul>
                      <li><a href="fake_url">Atributos</a></li>
                      <li><a href="fake_url">Categorías</a></li>
                      <li><a href="index2.html">Mercaderíás</a></li>
                      <li><a href="fake_url">Estados</a></li>
                      <li><a href="index2.html">Marcas</a></li>
                    </ul>
                  </li>
                  <li><a href="fake_url">
                    <i className="fa fa-circle-o" />Ventas</a>
                    <ul>
                      <li><a href="fake_url">Marcas Tarjetas</a></li>
                      <li><a href="fake_url">Emisor de la tarjeta</a></li>
                      <li><a href="fake_url">Medios de pago</a></li>
                      <li><a href="index2.html">Entidad financiera</a></li>
                      <li><a href="fake_url">Estados</a></li>
                      <li><a href="index2.html">Timbrados</a></li>
                    </ul>
                  </li>
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
