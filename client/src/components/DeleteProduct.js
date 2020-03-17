import React, { useEffect } from 'react';
import axios from 'axios';

export default props => {
    
    var productId = props.productId;
    console.log(productId);

    const deleteProduct=(productId)=>{
        axios.delete(`http://localhost:8000/api/product/delete/${productId}`)
            .then(response => console.log(response));
    }
    
    return (
        <div>
            <button type="button" className="btn btn-danger" onClick={(e)=>deleteProduct(productId)}>Delete</button>
        </div>
    );
}