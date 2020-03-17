import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    // keep track of what is being typed via a useState hook
    const [Title, setTitle] = useState("");
    const [Price, setPrice ] = useState("");
    const [Description, setDescription ] = useState("");

    // handler when the form is submitted
    const onSubmitHandler = e => {
        // prevent default behavior of the submit
        e.preventDefault();

        // make post request to create a new product
        axios.post('http://localhost:8000/api/product', {
            Title,
            Price,
            Description
        })
            .then( res=>console.log(res) )
            .catch( err=>console.log(err) )
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="form-group">
                <label>Title</label>
                <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type="text" onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Description</label>
                <input type="text" onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className="form-group">
                <button type="submit">Create</button>
            </div>

        </form>
    )
}