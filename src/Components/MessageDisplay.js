import react, { useState } from 'react';
    
    
const MessageDisplay = (props) => {
    return (
        <>
            <div>{ props.message.map((item, index) => {
                let style ={backgroundColor:item, width: 100, height: 100, display: "inline-block", margin: 10}
                return <div key ={index} style ={style} > {item }</div>
})}</div>
        </>
    );
};
    
export default MessageDisplay;