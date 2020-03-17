import React from 'react';
import EditProduct from '../components/EditProduct'


export default props => {
    console.log("props from edit")
    console.log(props.id);
    return (
        <div>
            <EditProduct id={props.id} />
        </div>
    )
}