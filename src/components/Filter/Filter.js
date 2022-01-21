import React from 'react';
import  '../../css/Filter/filter.css';
import Bounce from 'react-reveal/Zoom';

function Filter(props){
    return(
        <Bounce right>
        <div className="filter-wrapper">
            <h2 className="filter-title">Filter</h2>
            <div className="no-of-products">No of Products {props.productsNumber} Products</div>
            <div className="filter-by-size">
                <span>Filter</span>
                <select className="filter-select" value={props.size} onChange={props.handleFilterBySize}>
                    <option value ="ALL">ALL</option>
                    <option value ="XS">XS</option>
                    <option value ="S">S</option>
                    <option value ="M">M</option>
                    <option value ="L">L</option>
                    <option value ="XL">XL</option>
                    <option value ="XXL">XXL</option>
                </select>
            </div>
            <div className="filter-by-price">
                <span>Order</span>
                <select className="filter-select" value={props.sort} onChange={props.handleFilterByOrder}>
                    <option value ="latest">Latest</option>
                    <option value ="lowest">Lowest</option>
                    <option value ="highest">Highest</option>
                   
                </select>
            </div>
        </div>
        </Bounce>
    );
}

export default Filter;