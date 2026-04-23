import React, {useState} from 'react'
import Button from './Button'

// Importing Icons From React Icon Libarary
import { FaHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import toast from 'react-hot-toast';



function Card() {
  const [isLike, setIsLike] = useState(false)
  const message = () => toast.success('Product Added To Cart');
    const handleLike = () => {
    setIsLike(!isLike);
    const msg = !isLike ? 'Added To Favorites!' : 'Remove From Favourites!';
    const icon = !isLike ? '❤️' : '💔'
      toast(msg, {
      icon: icon,
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      }
    });
    }
  return (
    <div className='md:w-[285px] w-full h-auto  relative group px-2'>
        <div className='w-full h-[290px]  relative  overflow-hidden cursor-pointer rounded-[13px]'>            
            <img 
              src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=1000&fit=crop" 
              className="relative z-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-300" 
              alt="product"
            />
            <div className='absolute bottom-2 left-0 px-2 w-full z-10 flex items-center justify-center gap-1'>
            <Button Lefticon={BsHandbag}
              className='flex-1 text-black hover:text-white opacity-0 group-hover:opacity-100 uppercase h-[50px] border-none' 
              title='Add to Cart'
              bg='white'
              onClick={message}
            />
            <Button 
              className='w-[50px] bg-white text-black hover:text-white opacity-0 group-hover:opacity-100 border-none' 
              bg='white'
              Icon={FaHeart}
              iconClass={`text-xl  ${isLike ? 'text-red-500' : 'text-black'} `}
              onClick={handleLike}
            />
            </div>
        </div>
        <div className='mt-2 py-1'>
            <div className='px-1 text-white flex items-center justify-between'>
              <p className='text-gray-400'>Clothing</p>
              <p className='flex items-center gap-2'><FaStar className='text-yellow-400' />4.8</p>
            </div>
            <div className='p-1'>
              <h3 className='text-white font-semibold truncate max-w-[220px] hover:text-[#A21CAF] cursor-pointer transition-all duration-300'>Minimal Leather Jacket Minimal Leather Jacket</h3>
            </div>
            <div className='p-1'>
              <p className='text-white font-semibold'>$299 <del className='text-gray-500'>$399</del></p>
            </div>
            <div className='p-1 h-auto flex gap-1'>
               <div className='w-[15px] h-[15px] rounded-full bg-green-400 border'></div>
               <div className='w-[15px] h-[15px] rounded-full bg-black/100 border'></div>
               <div className='w-[15px] h-[15px] rounded-full bg-red-400 border'></div>
            </div>
        </div>
    </div>
  )
}

export default Card