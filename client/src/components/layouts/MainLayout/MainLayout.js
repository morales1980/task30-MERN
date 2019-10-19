import React from 'react';
import NavBar from '../../features/NavBar/NavBar';

// const MainLayout = ({children}) => (
const MainLayout = (props) => (
  <div>
    <NavBar/>
    {props.children}
  </div>
);

export default MainLayout;
