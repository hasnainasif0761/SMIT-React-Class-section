import { Outlet } from 'react-router-dom';
import Breadcrumbs from './BroadCrumbs';
import React, {useContext} from 'react'
import { ThemeContext } from '../Context/ThemeProvider';

const ProductLayout = () => {
  const { theme } =  useContext(ThemeContext)
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#050a14]' : 'bg-white'}`}>
      {/* Breadcrumbs yahan ek hi baar likhna parega */}
      <Breadcrumbs />

      {/* Outlet faisla karega ke ProductSection dikhana hai ya ProductDetail */}
      <div className={`container mx-auto p-4`}>
        <Outlet />
      </div>
    </div>
  );
};

export default ProductLayout;