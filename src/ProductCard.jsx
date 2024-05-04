import './ProductCard.css';

export const ProductCard = ({ imageUrl, price, title, discount }) => {
  const discountValue = price * discount;
  const discountedPrice = price - discountValue;

  const currency = '₽'
  const discountedPriceWithCurrency = `${discountedPrice} ${currency}`;
  const priceWithCurrency = `${price} ${currency}`;

  return (
    <div className='product-card'>
      <img src={imageUrl} alt={title} className='product-card__image' />
      {discount ? (
          <h3 className='product-card__caption'>
            <span className='price-discounted'>{discountedPriceWithCurrency}</span>
            <span className='price-old'>{priceWithCurrency}</span>
          </h3>
        ) : (
          <h3 className='product-card__caption'>{priceWithCurrency}</h3>
        )
      }
      <p className='product-card__descr'>{title}</p>
    </div>
  )
}
