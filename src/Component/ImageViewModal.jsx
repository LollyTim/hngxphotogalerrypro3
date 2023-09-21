// import React from 'react';
// import "./imageViewer.css"

// function ImageViewModal({ image, onClose }) {
//   return (
//     <div className="modal-frame">
//       <div className="modal-frame-contents">
//         <span className="close" onClick={onClose}>&times;</span>
//         <img  className=" items-center justify-center ml-20" src={image.url} alt={image.name} />
//       </div>
//     </div>
//   );
// }

// export default ImageViewModal;
import React, { useState } from 'react';
import "./imageViewer.css"



function ImageViewModal ({ images, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
    prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <div className="modal-frame">
      <div className="modal-frame-contents">
      <button type='button' className=' bg-blue-300 p-4 rounded-xl m-4 ' onClick={() => onClose && onClose()}>Close</button>
        <div className='justify-between gap-3 flex '>
{/* 
        <button className=" bg-blue-300 p-4 rounded-xl m-4 fixed mt-32 " onClick={prevImage}>
          Previous
        </button> */}
        

        <button className="max-h-96 max-w-[400px] items-center justify-center flex mx-auto rounded-xl  pt-20" onClick={nextImage}>
        <img 
          src={images[currentImageIndex].url}
          alt={images[currentImageIndex].name}
          className=' max-h-96 max-w-[400px] items-center justify-center flex mx-auto rounded-xl  '
          />
         

        </button>
          </div>
        {/* <button className="bg-blue-300" onClick={nextImage}>
          Next
        </button> */}
      </div>
    </div>
  );
}

export default ImageViewModal;
