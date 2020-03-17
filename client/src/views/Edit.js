import React from 'react';
import EditProduct from '../components/EditProduct'


export default props => {
    return (
        <div>
            <EditProduct id={props.id} />
        </div>
    )
}