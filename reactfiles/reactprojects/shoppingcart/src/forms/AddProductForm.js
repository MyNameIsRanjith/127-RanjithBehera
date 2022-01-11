import React, { useState } from "react";

const AddProductForm = (props) => {
    const initialFormState = {id:null,prodname:'',price:null,src:'',quantity:null};

    const[product,setProduct] = useState(initialFormState);

    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setProduct({...product,[name]:value});
    }

    return(
        <form onSubmit={ (event) => {
            event.preventDefault()
            if(!product.name || !product.prodname)

            return 
            props.addproduct(product)
            setProduct(initialFormState)
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
            <button>Add New Product</button>
        </form>
    );

}

export default AddProductForm;