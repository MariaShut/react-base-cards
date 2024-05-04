import { ProductCard } from './ProductCard';
import './ProductList.css';

export const ProductList = ({ products }) => {
  return (
    <ul className='product-list'>
      {products.map((item) => (
        <li className='product-list__item' key={item.id}>
          <ProductCard
            imageUrl={item.imageUrl}
            price={item.price}
            discount={item.discount}
            title={item.title}
            id={item.id}
          />
        </li>
      ))}
    </ul>
  )
}
