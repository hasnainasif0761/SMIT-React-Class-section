import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeProvider'
import CategoryCard from '../components/CategoryCard';

function Category() {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={`w-full h-auto py-5 ${theme === 'dark' ? 'bg-[#101828]' : 'bg-white'}`}>
        <div className='w-full h-auto pt-5 pb-2 flex justify-center items-center flex-col text-center'>
            <h1 className={`md:text-[35px] text-[25px] ${theme === 'dark' ? 'text-white':'text-black'} font-[700] [font-family:"Poppins",sans-serif]`}>Shop by Category</h1>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-black'} md:text-[17px] text-[14px]`}>Explore our curated collections and find exactly what you're looking for</p>
        </div>
        <CategoryCard/>
    </div>
  )
}

export default Category