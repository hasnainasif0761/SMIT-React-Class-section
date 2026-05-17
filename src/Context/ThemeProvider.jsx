import React, { createContext, useState } from 'react'
import toast from 'react-hot-toast'

export const ThemeContext = createContext(null)


function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark')
    const [cartItem,setCartItem] = useState([]);

    function ChangeTheme() {
        if (theme === 'dark') {
            setTheme('light')
        }
        if (theme === 'light') {
            setTheme('dark')
        }
    }

    function handleLike(pro_id) {
        var msg;
        if(cartItem.includes(pro_id)){
          msg = 'This Product is Already Add to cart'
        }else{
         setCartItem(prev => [...prev,pro_id])
         msg = 'Product Added to Cart Successfully'  
        }

        toast(msg, {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          }
        });
      }

    return (
        <ThemeContext.Provider value={{ theme,ChangeTheme,handleLike,cartItem}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider