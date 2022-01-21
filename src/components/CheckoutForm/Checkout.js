import React from 'react';
import '../../css/CheckoutForm/Checkout.css';
import Input from '../Input/Input.js';
function Checkout(props){
    return (
       <>
           {props.showForm &&(
                <div className="checkout-form">
                <span className="close-icon" onClick={()=>props.setShowForm(false)}>&times;</span>
                 <form onSubmit={props.submitOrder}>
                     <Input
                        name="name"
                        type="text"
                        label="name"
                        handleChange={props.handleChange}
                     />
                     <Input
                        name="email"
                        type="email"
                        label="Email"
                        handleChange={props.handleChange}
                     />
                     <div>
                         <button type="submit">Checkout</button>
                     </div>
                 </form>
            </div>
            )}
       </>
    );
}

export default Checkout;