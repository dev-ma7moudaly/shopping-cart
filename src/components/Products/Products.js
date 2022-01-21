import React,{useState} from 'react';
import '../../css/Products/Products.css';
import Bounce from 'react-reveal/Bounce';

import ProductModal from './ProductModal';

function Products(props){
    const[product,setProduct]=useState("");

   const openModal = (product)=>{
       setProduct(product);
   }

   const closeModal = () =>{
       setProduct(false);
    
   }

    return (
        <Bounce left cascade>
        <div className="products-wrapper"> { props.products.map(product =>(
            <div className="product-item" key={product.id}>
                    <a href="#" onClick={()=>openModal(product)} >
                    <img src={product.imageUrl} alt={product.title} />
                    </a>
                    <div className="product-desc">
                        <p>{product.title}</p>
                        <span>${product.price}</span>
                    </div>
                    <button onClick={()=>props.AddToCart(product)}>Add To Cart</button>
            </div>
        ) )} 

        <ProductModal product={product} closeModal={closeModal}/>

        </div>
        </Bounce>
    );
}

export default Products;