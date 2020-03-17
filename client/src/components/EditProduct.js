import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default props => {

    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    const [Title, setTitle] = useState();
    const [Price, setPrice] = useState();
    const [Description, setDescription] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
            .then(response => {
                console.log("Edit Product")
                console.log(response);
                setTitle(response.data[0].Title);
                setPrice(response.data[0].Price);
                setDescription(response.data[0].Description);
                setLoaded(true);
            })
    }, []);

    const onSubmitHandler =e=> {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/update/${props.id}`, {
            Title,
            Description,
            Price
        })
            .then( response=>console.log(response))
            .catch( error=>console.log(error));
    }

    return (
        <div>
            
        { loaded && 
           
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label for="title">Title:</label>
                    <input type="text" defaultValue={Title} onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label for="description">Description:</label>
                    <input type="text" defaultValue={Description} onChange={(e)=>setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <label for="price">Price</label>
                    <input type="text" defaultValue={Price} onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <button type="submit">Edit</button>
            </form>
        }
        </div>
    )
}
