import React, { useEffect,useState } from 'react'
import '../App.css'

function ViewProducts() {
    const [data, setdata] = useState([]);
    const [loading,setLoading] = useState(true);
    const arr = [0,1,2,3,4,5,6,7,8,9,11,12,13,14,15]
    useEffect(()=>{
        fetch('https://dummyjson.com/products?limit=30')
        .then(res => {
            if (!res.ok) throw new Error('Network issue please check network');
            return res.json();
        })
        .then(resp => {
            // console.log('response set=>',resp.products)
            setTimeout(()=>{
                setdata(resp.products)
                setLoading(false)
            },2000)
            console.log('Response =>', data);
        })
        .catch(err => {
            console.log(err);
        });
    },[])
    const viewCont = {
    width: '90%',
    margin: '20px auto',
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
}

const card = {
    width: '280px',
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
    transition: '0.3s ease',
    cursor: 'pointer',
}

const cardImg = {
    width: '100%',
    height: '180px',
}

const cardCont = {
    padding: '12px',
}

const title = {
    fontSize: '16px',
    fontWeight: '600',
    margin: '5px 0',
}

const price = {
    color: '#27ae60',
    fontWeight: 'bold',
    fontSize: '15px',
}

const desc = {
    fontSize: '13px',
    color: '#666',
    marginTop: '5px',
    lineHeight: '1.4',
}
const skeletonImg = {
    width: '100%',
    height: '180px',
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
}

const skeletonTitle = {
    width: '80%',
    height: '15px',
    backgroundColor: '#e0e0e0',
    marginBottom: '10px',
    borderRadius: '5px',
}

const skeletonPrice = {
    width: '40%',
    height: '15px',
    backgroundColor: '#e0e0e0',
    marginBottom: '10px',
    borderRadius: '5px',
}

const skeletonDesc = {
    width: '100%',
    height: '40px',
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
} 
const shimmer = {
    background: 'linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite'
}
  return (
    <div>
        <h1 style={{textAlign:'center'}}>View all Products Section</h1>
        <div style={viewCont}>

            {
                loading ? 
                
                arr.map(()=>{
                    return(
            <div style={card}>
                   <div style={skeletonImg}></div>
            <div style={cardCont}>
                <div style={skeletonTitle}></div>
                <div style={skeletonPrice}></div>
                <div style={skeletonDesc}></div>
            </div>
        </div>
                    )
                })
        : 
        data && data.map((product,idx)=>{
               return( 
                <div style={card}>
             <div style={cardImg}>
                <img
            src={product.images[0]}
            alt={product.title}
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            }}
        />
    </div>

    <div style={cardCont}>
        <h3 style={title}>{product.title}</h3>
        <h4 style={price}>${product.price}</h4>
        <p style={desc}>{product.description}</p>
    </div>
</div>
           )
            })}
        </div>
    </div>
  )
}

export default ViewProducts