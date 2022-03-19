import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
const ProductCard =(props) => { 
    const item = props.item ;
    const pricediscount =   item.originalprice - (item.originalprice*item.discountPercent)/100 ;
return( 
<div className='w-full md:w-2/2 xl:w-1/4 px-4 mb-10'>
      <div className='p-3 border-2 border-gray-300 rounded-lg shadow-md text-gray-800'>
        <span className='z-10 absolute text-xs font-semibold text-green-600 bg-green-100 rounded-2xl py-1 px-3 m-2'>-36%</span>
        <img className='object-fill-relative' src={`/images/${item.image}`}  alt=""></img>
       
        <div className='pt-5 mb-4'> 
          <Link to={item.nama}> 
          <h1 className='font-bold'>{item.nama}</h1>
          </Link>
          <span className='text-sm text-gray-500'>{item.description}</span>
        </div>  

        <div className='flex justify-between'>
          <div className='flex-col'>
            <h1 className='text-lg font-bold'> <NumberFormat value={pricediscount}   thousandSeparator={"."} decimalSeparator={","} displayType={'text'} prefix={'Rp '} /></h1>
            {props.item.discountPercent > 0 && <h2 className='text-sm -ml-38 text-gray-400 font-semibold line-through'><NumberFormat  className="line-through" value={item.originalprice}  displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp '} /> </h2> }
          </div>
          <div className='flex-col'>
            <button className="-ml-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Buy
            </button>
          </div>
        </div>
      
      </div>
    </div>
);
  }

  export default ProductCard ;