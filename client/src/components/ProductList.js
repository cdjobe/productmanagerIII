import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router'

import axios from 'axios';

export default props => {
    console.log(props.allProducts)
    var apiResponse = [];
    
    return (
        <div>
            {props.allProducts.products.map((product, i)=>{
                return <p>
                    <Link to={`product/${product._id}`}>{product.Title}</Link>
                </p>
            })}
        </div>
    )
}