import { NavLink, useLocation, useParams } from 'react-router-dom';
import { MdChevronRight } from "react-icons/md";
import data from '../utils/productsCard';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeProvider';

const Breadcrumbs = () => {
  const { id } = useParams(); // URL se id pakre ga
  const location = useLocation();
  const {theme} = useContext(ThemeContext)
  
  // Agar ID hai, to data mein se title nikal lo
  const product = data.find(p => p.id === id);

  return (
    <nav className="flex items-center gap-2 p-6 text-sm">
      <NavLink to="/" className="text-gray-500 hover:text-white">Home</NavLink>
      <MdChevronRight className="text-gray-600" />
      
      {/* Product List Link */}
      <NavLink 
        to="/product" 
        end 
        className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-500 hover:text-white"}
      >
        Product
      </NavLink>

      {/* Agar user detail page par hai, to product title dikhao */}
      {id && product && (
        <>
          <MdChevronRight className="text-gray-600" />
          <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} font-bold truncate max-w-[150px]`}>
            {product.title}
          </span>
        </>
      )}
    </nav>
  );
};

export default Breadcrumbs