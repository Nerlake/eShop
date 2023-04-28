import React, { useState } from 'react'
import './galery.css'
import { useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';


export default function Galery({ photos }) {

    const [mainImage, setMainImage] = useState(photos[0])
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };


    return (
        <div className='galery'>
            <div className="galery_container">
                <div className="galery_left_column">
                    {photos?.length > 1 &&
                        photos?.map((photo, index) => {

                            return <div className="galery_preview_image_container" key={index}>
                                <img src={photo} alt="" className='galery_preview_image' onClick={() => setMainImage(photo)} />
                            </div>
                        }
                        )}
                </div>
                <div className="galery_right_column">
                    <div className="galery_main_image_container">
                        <img src={mainImage} alt="" className='galery_main_image' onClick={() => openImageViewer(0)} />
                    </div>
                </div>
            </div>
            {isViewerOpen && (
                <ImageViewer
                    src={photos}
                    currentIndex={currentImage}
                    disableScroll={true}
                    closeOnClickOutside={true}
                    onClose={closeImageViewer}
                />
            )}
        </div>
    )
}
