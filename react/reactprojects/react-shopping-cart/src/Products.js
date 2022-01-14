import React, { useState } from 'react';

const UTILITY = 'utility';
const MOBILE = 'mobile';

export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
      category: UTILITY,
      name: '2000 mAh Battery',
      cost: 4.99,
      image:
        'https://santaelectro.com/products/1569586009Battery-Samsung-galaxy-CORE-PRIME-1.jpg',
    },
    {
        category: MOBILE,
        name: 'A123',
        cost: 149.99,
        image:
          'https://freebiescloud.com/wp-content/uploads/2020/10/2-85.png',
    },
    {
        category: MOBILE,
        name: 'A456',
        cost: 249.99,
        image:
          'https://freepngimg.com/thumb/samsung_mobile_phone/6-2-samsung-mobile-phone-picture.png',
    },
    {
        category: MOBILE,
        name: 'A789',
        cost: 349.99,
        image:
          'https://images.news18.com/ibnlive/uploads/2019/12/Samsung-Galaxy-S10-Lite.png?impolicy=website&width=510&height=356',
    },
    {
        category: MOBILE,
        name: 'B147',
        cost: 449.99,
        image:
          'https://www.pngfind.com/pngs/m/101-1016544_mobile-phone-png-samsung-galaxy-note-8-blue.png',
    },
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(MOBILE);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  return (
    <>
      <h1>Products</h1>
      Select a category
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={MOBILE}>{MOBILE}</option>
        <option value={UTILITY}>{UTILITY}</option>
      </select>
      <div className="products">
        {getProductsInCategory().map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h3>${product.cost}</h3>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}