import { useEffect, useState } from 'react'
import Ratings from '../components/Ratings';

const url = 'https://v2.api.noroff.dev/online-shop';

function HomePage() {
  const [products, setProducts] = useState([]);
  console.log('products',products);
  
  useEffect(() => {
    async function getProducts() {
      const response = await fetch(url);
      const data = await response.json();
      
      setProducts(data.data);
    }
    getProducts()
  }, []);
  
  return (
    <div className='grid grid-cols-3 gap-4 mt-10'>
    {products.map((product) => {
      return (
        <div key={product.id} className='border rounded bg-white flex flex-col h-full shadow-lg'>

          <div className='w-full h-[210px] overflow-hidden'>
            <img src={product.image.url} alt={product.title} className='w-full h-full object-cover'/>
          </div>

          <div className='flex flex-col px-4 py-4  min-h-[180px] flex-grow'>

            <h2 className="text-lg font-semibold">{product.title}</h2>

            <div className='mt-2'>
              {product.discountedPrice && product.discountedPrice < product.price ? (
                <p className='flex flex-col'>
                  <span className='line-through text-gray-500 text-[16px]'>Kr {product.price}</span>
                  <span className='text-green-600 font-bold text-[20px]'>Kr {product.discountedPrice}</span>
                </p>
              ) : (
                <p className='text-lg font-bold text-[20px]'>Kr {product.price}</p>
              )}
            </div>

            <div className='mt-auto'>
              <Ratings rating={product.rating} />
            </div>

          </div>
        </div>
      )
    })}
  </div>
  )
}

export default HomePage;