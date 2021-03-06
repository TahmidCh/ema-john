import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const {name,quantity} = props.product;
    return (
        <div>
            <h4>{name}</h4>
            <p>Quantity : {quantity}</p>
            <br/>
            <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;