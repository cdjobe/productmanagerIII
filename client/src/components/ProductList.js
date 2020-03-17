import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router'
import DeleteProduct from './DeleteProduct'

import axios from 'axios';

export default props => {
    var apiResponse = [];
    
    const [allProducts, setAllProducts] = useState(null);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=> {
        axios.get('http://localhost:8000/api/all')
            .then(response=> {
                setAllProducts(response.data.allProducts);
                
                setLoaded(true);
            })
    }, [])

    const removeFromDom = productId => {
        setAllProducts(allProducts.filter(product => product._id != productId))
    }

    return (
        <div>
            <table className="table">
                <tbody>
            { loaded && allProducts.map((product, i)=>{
                return <tr>
                    <td><Link to={`product/${product._id}`}>{product.Title}</Link></td>
                    <td><DeleteProduct productId={product._id} removeFromDom={removeFromDom} /></td>
                </tr>
            })}
            </tbody>
            </table>
        </div>
    )
}