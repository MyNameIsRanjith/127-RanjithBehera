import React, { useState } from "react";

const EditProductForm = (props) => {    
    const[product,setProduct] = useState(props.currentProduct);

    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setProduct({...product,[name]:value});
    }

    return(
        <form onSubmit={ (event) => {
            event.preventDefault()
            props.updatedProduct(product.id,product)
        }}>

        <label>
        ProdName
        <input type="text" name="prodname" value={product.prodname} onChange={handleInputChange}/>
        </label>
        <label>
        Price
        <input type="number" name="price" value={product.price} onChange={handleInputChange}/>
        </label>
        <label>
        SRC
        <input type="text" name="src" value={product.src} onChange={handleInputChange}/>
        </label>
        <label>
        Quantity
        <input type="number" name="quantity" value={product.quantity} onChange={handleInputChange}/>
        </label>
    
        <button>Update Product</button>
        </form>

    );

}

export default EditProductForm;