import React from 'react';

export default function Item(props) {
    const {title} = props;
    
    return (
        <div>
            <div>{title}</div>
        </div>
    )
}
