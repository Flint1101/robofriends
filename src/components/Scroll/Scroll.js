import React from "react";
import './scroll.css';

const Scroll = (props) => {
    return (
        <div style={{
            overflowY: 'scroll',
            height: '40em',
            margin: '40px 0 0 0'
        }}>
            {props.children}
        </div>
    )
};
export default Scroll;