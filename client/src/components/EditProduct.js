import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default props => {

    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    const [Title, setTitle] = useState("");
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");

    const onSubmitHandler =e=> {
        axios.put(`http://localhost:8000/api/product/update/${props.id}`, {
            Title,
            Price,
            Description
        })
            .then( response=>console.log(response))
            .catch( error=>console.log(error));
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
            .then(response => {
                setProduct({...response.data[0]})
                setLoaded(true);
            })
    })

    return (
        <div>
        { loaded && 
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label for="title">Title:</label>
                    <input type="text" value={product.Title} onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label for="description">Description:</label>
                    <input type="text" value={product.Description} onChange={(e)=>setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <label for="price">Price</label>
                    <input type="text" value={product.Price} onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <button type="submit">Edit</button>
            </form>
        }
        </div>
    )
}
