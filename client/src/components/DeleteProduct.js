import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default props => {
    
    var productId = props.productId;

    const deleteProduct=(productId)=>{
        axios.delete(`http://localhost:8000/api/product/delete/${productId}`)
            .then(response => {
                props.removeFromDom(productId)
            });
        navigate('/');
    }
    
    return (
        <div>
            <button type="button" className="btn btn-danger" onClick={(e)=>deleteProduct(productId)}>Delete</button>
        </div>
    );
}