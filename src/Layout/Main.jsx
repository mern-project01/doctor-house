import React from 'react';
import Navebar from '../pages/share/Navebar/Navebar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/share/Footer/Footer';

const Main = () => {
    return (
      <div>
        <Navebar></Navebar>
        <div className='h-min-screen'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Main;