import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default () => {
    
    const [ allProducts, setAllProducts ] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/all')
            .then(response => {
                setAllProducts(response.data);
                setLoaded(true);
            })
    }, [])

    return (
        <div>
            <ProductForm />
            {loaded && <ProductList allProducts={allProducts}/>}
        </div>
    )
}