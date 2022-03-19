 import { useParams } from 'react-router-dom';
 import Products from '../services/data/Product';
import Layout from './Layout';
import ProductCard from './ProductCard';
const Detail = () => {
    const params = useParams() ;
    const item = Products.filter(element => element.nama === params.productName);
console.log(item);
    return ( 
    <Layout> 
       {  <ProductCard item={item[0]} />  }

    </Layout>
);


}  

export default Detail ;