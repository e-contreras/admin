import React from 'react';
import { Route, Switch } from "react-router-dom";
import App from './App';
import Mercaderia from './components/layout/Content/Compras/Mercaderia';
import Add from './components/layout/Content/Compras/Mercaderia/Add';
import Cotizacion from './components/layout/Content/Compras/Cotizacion';
import AddCotizacion from './components/layout/Content/Compras/Cotizacion/Add';
import CotizacionProveedor from './components/layout/Content/Compras/Cotizacion/Proveedor';
import Proveedor from './components/layout/Content/Compras/Proveedor';
import AddProveedor from './components/layout/Content/Compras/Proveedor/Add';
import RemissionNote from './components/layout/Content/Compras/RemissionNote';
import AddRemissionNote from './components/layout/Content/Compras/RemissionNote/Add';
import CreditNote from './components/layout/Content/Compras/CreditNote';
import AddCreditNote from './components/layout/Content/Compras/CreditNote/Add';
import DebitNote from './components/layout/Content/Compras/DebitNote';
import AddDebitNote from './components/layout/Content/Compras/DebitNote/Add';
import PurchasesBook from './components/layout/Content/Compras/PurchasesBook';
import CreditNoteSale from './components/layout/Content/Ventas/CreditNote';
import AddCreditNoteSale from './components/layout/Content/Ventas/CreditNote/Add';
import DebitNoteSale from './components/layout/Content/Ventas/DebitNote';
import AddDebitNoteSale from './components/layout/Content/Ventas/DebitNote/Add';
import Pedidos from './components/layout/Content/Ventas/Pedido';
import SaleBook from './components/layout/Content/Ventas/SaleBook';
import ApproveRequest from './components/layout/Content/Ventas/Pedido/Approve';
import WorkOrder from './components/layout/Content/Logistica/WorkOrder';

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
        <Route path="/cotizaciones/proveedor" exact component={CotizacionProveedor} breadcrumb={['Compras', 'Mercaderías']} section={'Mercaderías'} module={'Módulo de compras'} />
        <Route path="/com-not-remision" exact component={RemissionNote} breadcrumb={['Compras', 'Mercaderías']} section={'Mercaderías'} module={'Módulo de compras'} />
        <Route path="/com-not-remision/add" exact component={AddRemissionNote} breadcrumb={['Compras', 'Mercaderías']} section={'Mercaderías'} module={'Módulo de compras'} />
        <Route path="/com-not-credito" exact component={CreditNote} breadcrumb={['Compras', 'Mercaderías']} section={'Mercaderías'} module={'Módulo de compras'} />
        <Route path="/com-not-credito/add" exact component={AddCreditNote} breadcrumb={['Compras', 'Mercaderías']} section={'Mercaderías'} module={'Módulo de compras'} />
        <Route path="/com-not-debito" exact component={DebitNote} breadcrumb={['Compras', 'Mercaderías']} section={'Mercaderías'} module={'Módulo de compras'} />
        <Route path="/com-not-debito/add" exact component={AddDebitNote} breadcrumb={['Compras', 'Mercaderías']} section={'Mercaderías'} module={'Módulo de compras'} />
        <Route path="/com-gen-lib-compras" exact component={PurchasesBook} breadcrumb={['Compras', 'Libro de ventas']} section={'Mercaderías'} module={'Libro de ventas'} />
        <Route path="/ven-pedidos" exact component={Pedidos} />
        <Route path="/ven-pedido/ven-approve" exact component={ApproveRequest} />
        <Route path="/ven-not-debito" exact component={DebitNoteSale} breadcrumb={['Ventas', 'Nota de crédito']} section={'Nota de crédito'} module={'Módulo de compras'} />
        <Route path="/ven-not-debito/add" exact component={AddDebitNoteSale} breadcrumb={['Ventas', 'Nota de crédito']} section={'Nota de crédito'} module={'Módulo de compras'} />
        <Route path="/ven-not-credito" exact component={CreditNoteSale} breadcrumb={['Ventas', 'Mercaderías']} section={'Mercaderías'} module={'Módulo de compras'} />
        <Route path="/ven-not-credito/add" exact component={AddCreditNoteSale} breadcrumb={['Ventas', 'Mercaderías']} section={'Mercaderías'} module={'Módulo de compras'} />
        <Route path="/ven-gen-lib-ventas" exact component={SaleBook} breadcrumb={['Ventas', 'Mercaderías']} section={'Mercaderías'} module={'Módulo de compras'} />
        <Route path="/log-orden-trabajo" exact component={WorkOrder}  />

    </Switch>
  </App>
);

export default AppRoutes;