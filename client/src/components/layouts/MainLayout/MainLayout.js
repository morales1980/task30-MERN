import React from 'react';
import NavBar from '../../features/NavBar/NavBar';
import PageContainer from '../PageContainer/PageContainer';
import './MainLayout.scss';

const MainLayout = ({children}) => (
  <div>
    <PageContainer>
      <NavBar/>
      {children}
    </PageContainer>
  </div>
);

export default MainLayout;
