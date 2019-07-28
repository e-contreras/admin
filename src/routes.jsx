import React from 'react';
import { Route, Switch } from "react-router-dom";
import App from './App';
import Mercaderia from './components/layout/Content/Mercaderia';
import Add from './components/layout/Content/Mercaderia/Add';
import Cotizacion from './components/layout/Content/Cotizacion';
import AddCotizacion from './components/layout/Content/Cotizacion/Add';
import Proveedor from './components/layout/Content/Proveedor';
import AddProveedor from './components/layout/Content/Proveedor/Add';

const AppRoutes = () => (
  <App>
    <Switch>
        <Route path="/" exact component={Mercaderia} breadcrumb={['Compras', 'Mercaderías']} section={'Mercaderías'} module={'Módulo de compras'} />
        <Route path="/mercaderias" exact component={Mercaderia} breadcrumb={['Compras', 'Mercaderías']} section={'Mercaderías'} module={'Módulo de compras'} />
        <Route path="/mercaderias/add" exact component={Add} breadcrumb={['Compras', 'Mercaderías']} section={'Mercaderías'} module={'Módulo de compras'} />
        <Route path="/proveedores" exact component={Proveedor} breadcrumb={['Compras', 'Mercaderías']} section={'Mercaderías'} module={'Módulo de compras'} />
        <Route path="/proveedores/add" exact component={AddProveedor} breadcrumb={['Compras', 'Mercaderías']} section={'Mercaderías'} module={'Módulo de compras'} />
        <Route path="/cotizaciones" exact component={Cotizacion} breadcrumb={['Compras', 'Mercaderías']} section={'Mercaderías'} module={'Módulo de compras'} />
        <Route path="/cotizaciones/add" exact component={AddCotizacion} breadcrumb={['Compras', 'Mercaderías']} section={'Mercaderías'} module={'Módulo de compras'} />
    </Switch>
  </App>
);

export default AppRoutes;