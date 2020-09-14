import React, { useRef, useEffect, useState } from 'react';

const ImageCard = ({ image }) => {
    const [spans, setSpans] = useState(0);
    const imageRef = useRef();

    useEffect(() => {
        imageRef.current.addEventListener('load', setSpan())
    }, []);
    const setSpan = () => {
        const height = imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        setSpans(spans);
    }
    return (
        <div style={{ gridRow: `auto / span ${spans}` }}>
            <img ref={imageRef} src={image.urls.regular} alt={image.alt_description}/>
            
        </div>
    );
}

export default ImageCard;