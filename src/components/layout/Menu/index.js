import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const initialState = {
  activeMenu: {
    id:undefined,
    name:undefined,
    url:undefined
  }
}

const menuItms = {
  compras: [
    {
      id: 'products',
      name: 'Mercaderías',
      url: '/mercaderias'
    },
    {
      id: 'providers',
      name: 'Proveedores',
      url: '/proveedores'
    },
    {
      id: 'cotizaciones',
      name: 'Cotizaciones',
      url: '/cotizaciones'
    },
    {
      id: 'com-not-remision',
      name: 'Nota de remisiones',
      url: '/com-not-remision'
    },
    {
      id: 'com-not-credito',
      name: 'Nota de crédito',
      url: '/com-not-credito'
    },
    {
      id: 'com-not-debito',
      name: 'Nota de débito',
      url: '/com-not-debito'
    },
    {
      id: 'com-gen-lib-compras',
      name: 'Generar Libro de compras',
      url: '/com-gen-lib-compras'
    }
  ],
  ventas: [
    {
      id: 'pedidos',
      name: 'Pedidos',
      url: '/ven-pedidos'
    },
    {
      id: 'ven-not-credito',
      name: 'Nota de crédito',
      url: '/ven-not-credito'
    },
    {
      id: 'ven-not-debito',
      name: 'Nota de débito',
      url: '/ven-not-debito'
    },
    {
      id: 'ven-gen-lib-ventas',
      name: 'Libro de ventas',
      url: '/ven-gen-lib-ventas'
    }
  ],
  logistica: [
    {
      id: 'log-empaquetar',
      name: 'Asignar empaque',
      url: '/log-empaquetar'
    },
    {
      id: 'log-transporte',
      name: 'Asignar transporte',
      url: '/log-transporte'
    },
    {
      id: 'log-list-not-remision/list',
      name: 'Generar Not. remisión',
      url: '/log-list-not-remision/list'
    },
    {
      id: 'reg-event-ot',
      name: 'Libro de ventas',
      url: '/reg-event-ot'
    }
  ],
  seguridad: [
    {
      id: 'users',
      name: 'Usuarios',
      url: '/users'
    },
    {
      id: 'roles',
      name: 'Roles',
      url: '/reles'
    },
    {
      id: 'pantallas',
      name: 'Pantallas',
      url: '/pantallas'
    }
  ],
  mantenimiento: {
    general: [
      {
        id: 'departments',
        name: 'Departamentos',
        url: '/general/departaments'
      },
      {
        id: 'cities',
        name: 'Ciudades',
        url: '/general/cities'
      },
      {
        id: 'neigborhood',
        name: 'Barrios',
        url: '/general/neighbourhoods'
      }
    ]
  }

};

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }


  changeLink(activeMenu) {
    this.setState({activeMenu: activeMenu});
  }

  changeMantenimiento(activeMenu) {
    this.setState({activeMenu: activeMenu});
  }

  render() {
    return (
      <div>
        <aside className="main-sidebar">
          {/* sidebar: style can be found in sidebar.less */}
          <section className="sidebar">
            {/* Sidebar user panel */}
            <div className="user-panel">
              <div className="pull-left image">
                <img src="/dist/img/user.png" className="img-circle" alt="user" />
              </div>
              <div className="pull-left info">
                <p>Jhon Doe</p>
                <a href="fake_url"><i className="fa fa-circle text-success" /> Online</a>
              </div>
            </div>
            {/* sidebar menu: : style can be found in sidebar.less */}
            <ul className="sidebar-menu" data-widget="tree" >
              <li className="header">Menú de navegación</li>
              <li className="treeview" id="mod-compras" hidden={ !menuItms.compras}>
                <a href="fake_url">
                  <i className="fa fa-shopping-cart"></i> <span>Compras</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  {menuItms.compras.map(menuItem =>
                    <li className={this.state.activeMenu.id === menuItem.id ? 'active': 'activo'} key={ menuItem.id}>
                      <Link to={menuItem.url} id={menuItem.id} onClick={this.changeLink.bind(this, menuItem)}>
                        <i className="fa fa-circle-o" /> {menuItem.name}
                      </Link>
                    </li>
                  )}
                </ul>
              </li>
              <li className="treeview" hidden={ !menuItms.ventas }>
                <a href="fake_url">
                  <i className="fa fa-credit-card"></i> <span>Ventas</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  {menuItms.ventas.map(menuItem =>
                    <li className={this.state.activeMenu === menuItem ? 'active': ''} key={menuItem.id}>
                      <Link to={menuItem.url} id={menuItem.id} onClick={this.changeLink.bind(this, menuItem)}>
                        <i className="fa fa-circle-o" /> {menuItem.name} 
                      </Link>
                    </li>
                  )}
                </ul>
              </li>
              <li className="treeview" hidden={ !menuItms.logistica }>
                <a href="fake_url">
                  <i className="fa fa-truck"></i> <span>Lógistica</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  {menuItms.logistica.map(menuItem =>
                    <li className={this.state.activeMenu === menuItem ? 'active': ''} key={menuItem.id}>
                      <Link to={menuItem.url} id={menuItem.id} onClick={this.changeLink.bind(this, menuItem)}>
                        <i className="fa fa-circle-o" /> {menuItem.name}
                      </Link>
                    </li>
                  )}
                </ul>
              </li>
              <li className="treeview" hidden={ !menuItms.seguridad }>
                <a href="fake_url">
                  <i className="fa fa-briefcase"></i> <span>Seguridad y acceso</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  {menuItms.seguridad.map(menuItem =>
                    <li id={menuItem.id} className={this.state.activeMenu === menuItem ? 'active': ''} key={menuItem.id}> 
                      <Link to={menuItem.url} id={menuItem.id} onClick={this.changeLink.bind(this, menuItem)}>
                        <i className="fa fa-circle-o" /> {menuItem.name}
                      </Link>
                    </li>
                  )}
                </ul>
              </li>
              <li className="treeview" hidden={!menuItms.mantenimiento.general}>
                <a href="fake_url">
                  <i className="fa fa-gear"></i> <span>Mantenimiento</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><a href="fake_url">
                    <i className="fa fa-circle-o" />General</a>
                    <ul>
                      {menuItms.mantenimiento.general.map(menuItem =>
                        <li style={this.state.activeMenu === menuItem ? {color:'white'}: {}} key={menuItem.id}>
                          <Link to={menuItem.url} id={menuItem.id} onClick={this.changeMantenimiento.bind(this, menuItem)} style={this.state.activeMenu === menuItem ? {color:'white'}: {}}>
                            {menuItem.name}
                          </Link>
                        </li>
                      )}
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
