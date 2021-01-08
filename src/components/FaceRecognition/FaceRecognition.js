import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div>
        
        <img  style = {{width: 300, height: 300, marginTop: 5}} alt ='' src= {imageUrl}/>
        
        </div>
    )
}

export default FaceRecognition;
