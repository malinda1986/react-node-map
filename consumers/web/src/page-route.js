import React from 'react';

const Home = React.lazy(() => import('pages/home'));

const publicRoutes = [
  { path: '/home', exact: true, name: 'Home', component: Home },
];

export default publicRoutes;