import { FaStar } from 'react-icons/fa';

let data = [
    {
        id: 'prod_001',
        title: 'Minimal Leather Jacket',
        category: 'Clothing',
        price: '$299',
        delPrice: '$399',
        color: ['orange', 'green', 'black'],
        size: ['S', 'M', 'L', 'XL'], // 4 sizes
        stars: ['FaStar', 'FaStar', 'FaStar', 'FaStar', 'FaStar'],
        reviews: '245 customer reviews',
        description: 'A premium quality genuine leather jacket featuring a sleek, minimalist design. Perfect for both casual outings and semi-formal events, providing both style and warmth.',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format'
    },
    {
        id: 'prod_002',
        title: 'Cotton Crewneck T-Shirt',
        category: 'Clothing',
        price: '$45',
        delPrice: '$60',
        color: ['white', 'blue', 'gray'],
        size: ['XS', 'S', 'M', 'L', 'XL'], // All sizes
        stars: ['FaStar', 'FaStar', 'FaStar', 'FaStar'],
        reviews: '120 customer reviews',
        description: 'Ultra-soft, breathable 100% organic cotton t-shirt. This crewneck is designed for all-day comfort and long-lasting durability through many washes.',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format'
    },
    {
        id: 'prod_003',
        title: 'Wireless Noise Cancelling Headphones',
        category: 'Electronics',
        price: '$199',
        delPrice: '$250',
        color: ['black', 'silver'],
        size: ['Standard'], // Single size
        stars: ['FaStar', 'FaStar', 'FaStar', 'FaStar', 'FaStar'],
        reviews: '890 customer reviews',
        description: 'Industry-leading noise cancellation technology ensures a pure listening experience. Features high-fidelity audio and up to 30 hours of battery life.',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format'
    },
    {
        id: 'prod_004',
        title: 'Smart Fitness Watch',
        category: 'Electronics',
        price: '$120',
        delPrice: '$180',
        color: ['black', 'pink', 'gold'],
        size: ['38mm', '42mm', '44mm'], // Technical sizes
        stars: ['FaStar', 'FaStar', 'FaStar', 'FaStar'],
        reviews: '340 customer reviews',
        description: 'Advanced fitness tracking for heart rate, sleep, and steps. Waterproof design with a vibrant touch display and customizable watch faces.',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format'
    },
    {
        id: 'prod_005',
        title: 'Urban Canvas Backpack',
        category: 'Accessories',
        price: '$85',
        delPrice: '$110',
        color: ['brown', 'black', 'navy'],
        size: ['20L', '30L'], // Capacity sizes
        stars: ['FaStar', 'FaStar', 'FaStar', 'FaStar', 'FaStar'],
        reviews: '156 customer reviews',
        description: 'Heavy-duty canvas backpack with a dedicated padded laptop compartment. Ideal for daily commuting or weekend urban adventures.',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format'
    },
    {
        id: 'prod_006',
        title: 'Classic Aviator Sunglasses',
        category: 'Accessories',
        price: '$150',
        delPrice: '$200',
        color: ['gold', 'black'],
        size: ['Standard'],
        stars: ['FaStar', 'FaStar', 'FaStar', 'FaStar'],
        reviews: '98 customer reviews',
        description: 'Iconic aviator silhouette with polarized lenses for 100% UV protection. Lightweight metal frames for a comfortable, timeless fit.',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format'
    },
    {
        id: 'prod_007',
        title: 'Slim Fit Denim Jeans',
        category: 'Clothing',
        price: '$75',
        delPrice: '$95',
        color: ['blue', 'black', 'lightblue'],
        size: ['30', '32', '34', '36'], // Waist sizes
        stars: ['FaStar', 'FaStar', 'FaStar', 'FaStar'],
        reviews: '212 customer reviews',
        description: 'Premium stretch denim that offers a modern slim-fit look without sacrificing comfort. Features reinforced stitching for extra durability.',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format'
    },
    {
        id: 'prod_008',
        title: 'Portable Bluetooth Speaker',
        category: 'Electronics',
        price: '$55',
        delPrice: '$80',
        color: ['red', 'blue', 'black'],
        size: ['Mini', 'Max'], 
        stars: ['FaStar', 'FaStar', 'FaStar'],
        reviews: '450 customer reviews',
        description: 'Compact yet powerful speaker with crystal clear sound. IPX7 waterproof rating makes it perfect for beach parties or poolside listening.',
        image: 'https://images.unsplash.com/photo-1608156639585-34a0a56ee6c9?w=500&auto=format'
    },
    {
        id: 'prod_009',
        title: 'Premium Yoga Mat',
        category: 'Fitness',
        price: '$40',
        delPrice: '$55',
        color: ['purple', 'teal'],
        size: ['6mm', '8mm'], // Thickness sizes
        stars: ['FaStar', 'FaStar', 'FaStar', 'FaStar', 'FaStar'],
        reviews: '310 customer reviews',
        description: 'Eco-friendly, non-slip yoga mat with extra thickness for joint support. Easy to clean and comes with a convenient carrying strap.',
        image: 'https://images.unsplash.com/photo-1592432676556-26d535f3d48d?w=500&auto=format'
    },
    {
        id: 'prod_010',
        title: 'Coffee Brew Master',
        category: 'Appliances',
        price: '$180',
        delPrice: '$220',
        color: ['black', 'silver'],
        size: ['1.5L'],
        stars: ['FaStar', 'FaStar', 'FaStar', 'FaStar', 'FaStar'],
        reviews: '175 customer reviews',
        description: 'Precision drip coffee maker with a programmable timer. Features a thermal carafe to keep your coffee hot for hours without burning.',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format'
    },
    {
        id: 'prod_011',
        title: 'Mechanical Gaming Keyboard',
        category: 'Electronics',
        price: '$110',
        delPrice: '$150',
        color: ['rgb', 'black'],
        size: ['Tenkeyless', 'Full Size'], // Layout sizes
        stars: ['FaStar', 'FaStar', 'FaStar', 'FaStar', 'FaStar'],
        reviews: '670 customer reviews',
        description: 'Tactile mechanical switches for fast gaming response. Includes customizable RGB lighting and a durable aluminum top plate.',
        image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&auto=format'
    },
    {
        id: 'prod_012',
        title: 'Knit Winter Scarf',
        category: 'Clothing',
        price: '$25',
        delPrice: '$35',
        color: ['maroon', 'beige', 'gray'],
        size: ['One Size'],
        stars: ['FaStar', 'FaStar', 'FaStar', 'FaStar'],
        reviews: '85 customer reviews',
        description: 'A cozy, chunky knit scarf made from a premium wool blend. Stylish and functional for the coldest winter days.',
        image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=500&auto=format'
    },
    {
        id: 'prod_013',
        title: 'Ergonomic Office Chair',
        category: 'Furniture',
        price: '$240',
        delPrice: '$310',
        color: ['black', 'white', 'gray'],
        size: ['Adjustable'],
        stars: ['FaStar', 'FaStar', 'FaStar', 'FaStar', 'FaStar'],
        reviews: '140 customer reviews',
        description: 'Designed for lumbar support and spinal alignment. Features breathable mesh, adjustable armrests, and a smooth reclining mechanism.',
        image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=500&auto=format'
    },
    {
        id: 'prod_014',
        title: 'Professional DSLR Camera',
        category: 'Electronics',
        price: '$1200',
        delPrice: '$1500',
        color: ['black','green'],
        size: ['Body Only', 'With 18-55mm Lens'],
        stars: ['FaStar', 'FaStar', 'FaStar', 'FaStar', 'FaStar'],
        reviews: '230 customer reviews',
        description: 'High-resolution full-frame sensor for stunning image quality. Fast autofocus and 4K video recording for professional photographers.',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format'
    },
    {
        id: 'prod_015',
        title: 'Waterproof Running Shoes',
        category: 'Clothing',
        price: '$135',
        delPrice: '$170',
        color: ['blue', 'neon', 'black'],
        size: ['8', '9', '10', '11', '12'], // UK/US Sizes
        stars: ['FaStar', 'FaStar', 'FaStar', 'FaStar'],
        reviews: '560 customer reviews',
        description: 'Lightweight running shoes with a Gore-Tex waterproof membrane. Provides maximum grip and cushioning for trail or road running.',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format'
    }
];

export default data;