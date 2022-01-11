import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ProductTable from './tables/ProductTable';
import AddProductForm from './forms/AddProductForm';
import EditProductForm from './forms/EditProductForm';

const App = () =>{
  const productData = [
    {id:1101,prodname:'A123',price:14999, src: <img src="https://freebiescloud.com/wp-content/uploads/2020/10/2-85.png" height={100} width={100} alt="prod1104"/>, quantity: 3},
    {id:1102,prodname:'A456',price:15999, src: <img src="https://freepngimg.com/thumb/samsung_mobile_phone/6-2-samsung-mobile-phone-picture.png" height={100} width={100} alt="prod1102"/>, quantity: 2},
    {id:1103,prodname:'A789',price:16999, src: <img src="https://images.news18.com/ibnlive/uploads/2019/12/Samsung-Galaxy-S10-Lite.png?impolicy=website&width=510&height=356" height={100} width={100} alt="prod1103"/>, quantity: 1},
    {id:1104,prodname:'B147',price:18999, src: <img src="https://www.pngfind.com/pngs/m/101-1016544_mobile-phone-png-samsung-galaxy-note-8-blue.png" height={100} width={100} alt="prod1104"/>, quantity: 2}
    ];

  const[products,setProducts] = useState(productData);

  const addProduct = (product) => {
    product.id = products.length+101
    setProducts([...products,product]);
  }

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id!==id ));
  }

  const[editing,setEditing] = useState(false);

  const initialFormState = {id:null,prodname:'',price:null,src:'',quantity:null};

  const[currentProduct,setCurrentProduct] = useState(initialFormState);

  const editRow = (product) => {
    setEditing(true);
    setCurrentProduct({id:product.id,prodname:product.prodname,price:product.price, src: product.src, quantity: product.quantity, total: product.total});
  }

  const updatedProduct = (id,updatedProduct) => {
    setEditing(false);
    setProducts(products.map((product) => product.id === id ? updatedProduct:product))
  }

  return(
    <div className="container">
      <h1>ShoppingCart-App</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          { editing ? (
            <div>
              <h2>Edit Product</h2>
              <EditProductForm setEditing={setEditing} currentProduct={currentProduct} updatedProduct={updatedProduct}/> 
            </div>
           ):( 
            <div>
              <h2>Add Product</h2>
              <AddProductForm addproduct={addProduct}/> 
            </div> 
           )}
        </div>
        <div className='flex-large'>
          <h2>View Products Data: </h2>
          <ProductTable products={products} editRow={editRow} deleteProduct={deleteProduct}/>
        </div>
      </div>
    </div>
  );

}

export default App;