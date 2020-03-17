import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteProduct from '../components/DeleteProduct';
import EditProduct from '../components/EditProduct'
import '../bootstrap.css';


export default props => {
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
        .then(response =>  {
            setProduct({...response.data[0]})
            setLoaded(true);
        });
    }, []);

    const deleteProduct =(productId)=> {
        axios.delete(`http://localhost:8000/api/product/delete/${productId}`)
            .then(res => console.log(res) )
    }

    return (
        <div>
            {
            loaded &&
            <div> 
                <table id="desc" className="table table-borderless">
                    <tr>
                        <td>
                            Title:
                        </td>
                        <td>
                            {product.Title}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Description:
                        </td>
                        <td>
                            {product.Description}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Price:
                        </td>
                        <td>
                            ${product.Price}
                        </td>
                    </tr>
                </table>  
                <div>
                    {/* <EditProduct product={product} /> */}
                    <Link to={`/${product._id}/edit`} productId={product._id}>Edit</Link>
                    <DeleteProduct productId={product._id} />
                </div>              
            </div>
        }
        </div>
    )
}