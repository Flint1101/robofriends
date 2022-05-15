import React from 'react';

import './card.css';

const Card = ({name, email, id}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow b2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?64x64`}></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}
export default Card;