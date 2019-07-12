import React from 'react';
import { Route } from 'react-router-dom';

// Components
import App from './App';
import Mercaderia from './components/layout/Content/Mercaderia';

const AppRoutes = () => (
  <App>
    <Route path="/" component={Mercaderia} breadcrumb={['Compras', 'Mercaderías']} section={'Mercaderías'} module={'Módulo de compras'} />
  </App>
);

export default AppRoutes;