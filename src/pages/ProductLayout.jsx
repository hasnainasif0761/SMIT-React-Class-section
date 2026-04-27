import { Outlet } from 'react-router-dom';
import Breadcrumbs from './BroadCrumbs';

const ProductLayout = () => {
  return (
    <div className="min-h-screen bg-[#050a14]">
      {/* Breadcrumbs yahan ek hi baar likhna parega */}
      <Breadcrumbs />

      {/* Outlet faisla karega ke ProductSection dikhana hai ya ProductDetail */}
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default ProductLayout;