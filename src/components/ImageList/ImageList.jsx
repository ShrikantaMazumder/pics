import React from 'react';
import './ImageList.css';
import Gallery from 'react-grid-gallery';

const ImageList = (props) => {
    let images = [];
    props.images.map((image) => {
        images.push(
            {
                src: image.urls.regular,
                thumbnail: image.urls.regular,
                thumbnailWidth: Math.ceil(image.width / 10),
                thumbnailHeight: Math.ceil(image.height / 10),
                isSelected: false,
                caption: image.description
        }
        );
    });

    return <Gallery images={images} />
}

export default ImageList;