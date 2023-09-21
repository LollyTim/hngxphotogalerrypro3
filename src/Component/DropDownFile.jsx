import React, { useState, useRef, useEffect} from 'react';
import './Dragable.css';
import ImageViewModal from './ImageViewModal'; 



function DropDownFile() {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewerOpen, setViewerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  
  const openViewer = () => {
    setViewerOpen(true);
  };


  
  const closeViewer = () => {
    setViewerOpen(false);
  };

  function selectFiles() {
    fileInputRef.current.click();
  }


  function onFileSelect(event) {
    const files = event.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] !== 'image') continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }
 
   function onDragOver(event) {
      event.preventDefault();
      setIsDragging(true);
      event.dataTransfer.dropEffect = "copy";
   }
   function onDragLeave(event) {
    event.preventDefault();
    setIsDragging(false);
   }
   function onDrop(event) {
      event.preventDefault();
      setIsDragging(false);
      const files = event.dataTransfer.files;
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.split('/')[0] !== 'image') continue;
        if (!images.some((e) => e.name === files[i].name)) {
          setImages((prevImages) => [
            ...prevImages,
            {
              name: files[i].name,
              url: URL.createObjectURL(files[i]),
            },
          ]);
        }
      }
    
   }


   useEffect(() => {
   
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); 
  }, []);


  return ( 
    < div className=' '>
      
          <input
        className='items-center mt-3 mb-3 flex bg-transparent px-2 py-2 font-semibold text-green-300 rounded-xl  w-[300px] ring-2 ring-green-300 focus:ring-2 focus:ring-green-500 mx-auto border-green-400'
        type='text'
        placeholder='Search by image name'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        />

       
       
     
    <div className='p-1 text-center pb-6'>
      <div className='text-center font-bold text-green-300 text-[30px]'>
        <p>Drag & Drop Image Uploading</p>
      </div>
      <div className='h-[150px] w-[300px] mx-auto rounded-xl border-[2px] border-dashed border-green-600 text-green-500 flex justify-center mt-3 items-center' onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
         {isLoading ? (
           
            <div className=' animate-spin w-12 h-12 rounded-full'>Mentors pls wait as my app loads</div>
          ) : isDragging ? (
            <span className='bg-gray-300  justify-center'>Drop Images here</span>
          ) : (
            <>
              {"  Drag & Drop images here or   "} {"         "}
              <span role='button' onClick={selectFiles}>
                Browse
              </span>
            </>
          )}
          

        
        <input
          name='file'
          type='file'
          multiple
          ref={fileInputRef}
          onChange={onFileSelect}
          className='display'
        />
      </div>
     
      {viewerOpen && (
        <ImageViewModal images={images} onClose={closeViewer} />
      )}
    </div>
    
      <section className='ml-12 items-center grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-h-24 max-w-24 min-h-0 mx-auto justify-between gap-8'>
         
         {images
          .filter((image) =>
            image.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        .map((image, index) => (
          <div className=' w-28 flex flex-col rounded-lg ' key={index}>
          {/* <span className='delete' onClick={() => deleteImage(index)}>&times;</span> */}
          <img className='w-28 rounded-xl'
          src={image.url} alt={image.name} onClick={openViewer} /> 
          <p className='text-green-300 w-26'>{image.name} </p>
          </div>
          ))}
        
         
      </section>
      </div>
  );
}



export default DropDownFile;
   



