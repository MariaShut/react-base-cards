import ReactDOM from 'react-dom/client';
import { products } from './products';

import './main.css';
import { ProductList } from './ProductList';


const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(<ProductList products={products}/>);
