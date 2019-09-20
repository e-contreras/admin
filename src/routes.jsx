import React from 'react';
import { Route, Switch } from "react-router-dom";
import App from './App';
import Cotizacion from './components/layout/Content/Compras/Cotizacion';
import AddCotizacion from './components/layout/Content/Compras/Cotizacion/Add';
import CotizacionProveedor from './components/layout/Content/Compras/Cotizacion/Proveedor';
import CreditNote from './components/layout/Content/Compras/CreditNote';
import AddCreditNote from './components/layout/Content/Compras/CreditNote/Add';
import DebitNote from './components/layout/Content/Compras/DebitNote';
import AddDebitNote from './components/layout/Content/Compras/DebitNote/Add';
import Mercaderia from './components/layout/Content/Compras/Mercaderia';
import Add from './components/layout/Content/Compras/Mercaderia/Add';
import Proveedor from './components/layout/Content/Compras/Proveedor';
import AddProveedor from './components/layout/Content/Compras/Proveedor/Add';
import PurchasesBook from './components/layout/Content/Compras/PurchasesBook';
import RemissionNote from './components/layout/Content/Compras/RemissionNote';
import AddRemissionNote from './components/layout/Content/Compras/RemissionNote/Add';
import WorkOrder from './components/layout/Content/Logistica/WorkOrder';
import WorkOrderList from './components/layout/Content/Logistica/WorkOrder/List';
import PackageWorkOrder from './components/layout/Content/Logistica/WorkOrder/Package';
import TransportWorkOrder from './components/layout/Content/Logistica/WorkOrder/transport';
import TransportListWorkOrder from './components/layout/Content/Logistica/WorkOrder/transport/List';
import Undelibered from './components/layout/Content/Logistica/WorkOrder/Undelibered';
import City from './components/layout/Content/Maintainace/General/City';
import Departament from './components/layout/Content/Maintainace/General/Departament';
import CreditNoteSale from './components/layout/Content/Ventas/CreditNote';
import AddCreditNoteSale from './components/layout/Content/Ventas/CreditNote/Add';
import DebitNoteSale from './components/layout/Content/Ventas/DebitNote';
import AddDebitNoteSale from './components/layout/Content/Ventas/DebitNote/Add';
import Pedidos from './components/layout/Content/Ventas/Pedido';
import ApproveRequest from './components/layout/Content/Ventas/Pedido/Approve';
import SaleBook from './components/layout/Content/Ventas/SaleBook';
import Login from './components/Login';
import Neighbourhood from './components/layout/Content/Maintainace/General/Neighbourhood';

const AppRoutes = () => (
  <App>
    <Switch>
        <Route path="/login" exact component={Login} breadcrumb={['Compras', 'Mercaderías']} section={'Mercaderías'} module={'Módulo de compras'} />
        <Route path="/mercaderias" exact component={Mercaderia} breadcrumb={['Compras', 'Mercaderías']} section={'Mercaderías'} module={'Módulo de compras'} />
        <Route path="/mercaderias/add" exact component={Add} breadcrumb={['Compras', 'Mercaderías']} section={'Mercaderías'} module={'Módulo de compras'} />
        <Route path="/proveedores" exact component={Proveedor} breadcrumb={['Compras', 'Proveedores']} section={'Proveedores'} module={'Módulo de compras'} />
        <Route path="/proveedores/add" exact component={AddProveedor} breadcrumb={['Compras', 'Mercaderías']} section={'Mercaderías'} module={'Módulo de compras'} />
        <Route path="/cotizaciones" exact component={Cotizacion} breadcrumb={['Compras', 'Cotizaciones']} section={'Cotizaciones'} module={'Módulo de compras'} />
        <Route path="/cotizaciones/add" exact component={AddCotizacion} breadcrumb={['Compras', 'Cotizaciones']} section={'Cotizaciones'} module={'Módulo de compras'} />
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
        <Route path="/log-empaquetar/list" exact component={WorkOrder}  />
        <Route path="/log-not-remision/list" exact component={WorkOrderList}  />
        <Route path="/log-empaquetar" exact component={PackageWorkOrder}  />
        <Route path="/log-transporte" exact component={TransportWorkOrder}  />
        <Route path="/log-transporte/list" exact component={TransportListWorkOrder}  />
        <Route path="/log-list-not-remision/list" exact component={WorkOrderList}  />
        <Route path="/log-undeliberd" exact component={Undelibered}  />
        <Route path="/general/departaments" exact component={Departament}  />
        <Route path="/general/cities" exact component={City}  />
        <Route path="/general/neighbourhoods" exact component={Neighbourhood}  />
    </Switch>
  </App>
);

export default AppRoutes;