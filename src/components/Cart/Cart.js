import React,{useState}  from 'react';
import '../../css/Cart/cart.css';
import Checkout from '../CheckoutForm/Checkout';
import Bounce from 'react-reveal/Bounce';

function Cart(props){

    const[showForm,setShowForm]= useState(false);
    const[value,setValue]=useState("");

    const submitOrder = (e) =>{
        e.preventDefault();
        const order = {
            name: value.name,
            email:value.email
        }
        console.log(order);
    }

    const handleChange = (e) =>{
       
       setValue((prevState) =>({...prevState,[e.target.name]:e.target.value}))
    }
    
    return (
        <div className="cart-wrapper">
            <div className="cart-title">{props.cartItems.length ==0 ? 'Cart Empty':
              <p> There is {props.cartItems.length} products in cart</p>
            }</div>
            
            <div className="cart-items">
                {props.cartItems.map(item =>(
                  <Bounce bottom>  
                    <div className="cart-item" key={item.id}>
                    <img src={item.imageUrl} alt={item.title} />
                    <div className="cart-info">
                        <div>
                            <p>Title {item.title}</p>
                            <p>Qty: {item.qty}</p>
                            <p>Price: ${item.price}</p>
                        </div>
                        <button onClick={()=>props.removeFromCart(item)}>Remove</button>
                    </div>
                </div>
                 </Bounce>
                ))}
            </div>
            {
                props.cartItems.length !==0 &&
                (
                <div className="cart-footer">
                     <div className="total"> Total: ${props.cartItems.reduce((acc,p)=>{
                         return acc + (p.price*p.qty);
                     },0)}
                     </div>
                     <button onClick={()=>setShowForm(true)}>Select Products</button>
                </div>
               )
            }
            {/* checkout form */}
            <Checkout 
              handleChange={handleChange} 
              submitOrder={submitOrder} 
              setShowForm={setShowForm} 
              showForm={showForm} 
            />

        </div>
    );
}

export default Cart;