import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default () => {
    
    return (
        <div>
            <ProductForm />
            <ProductList />}
        </div>
    )
}