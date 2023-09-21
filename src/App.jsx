import React, {useEffect, useState} from "react"  
import DropDownFile from "./Component/DropDownFile";
// import Login from './Component/Login';
// import {  Routes, Route} from 'react-router-dom';

function App() {

const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  }, []);

  return (
    <div className=" flex justify-center items-center mt-10 mx-auto">
      {isLoading ? (
            
             <div className=' animate-pulse rounded-full  items-center justify-center'>
      <div
        className=' h-10 items-center mt-3 mb-3 flex bg-transparent px-2 py-2 font-semibold text-gray-500 rounded-xl bg-gray-400  w-[300px] ring-5 ring-gray-300 focus:ring-2 focus:ring-gray-500 mx-auto border-gray-400'
        
        />

    <div className='p-1 text-center items-center pb-6'>
      <div className='text-center font-bold w-96 h-10 bg-gray-200 text-gray-300 text-[30px]'>
        <p></p>
      </div>
      <div className='h-[150px] w-[300px] mx-auto rounded-xl border-[2px] border-gray-600 text-gray-500 flex justify-center mt-3 items-center bg-gray-300'>
         
         
            <span className='bg-gray-300  justify-center w-36 h-4 '></span>
          
            
        
      </div>
              </div>
             </div>
           ) : (
        //       <Routes>
				// <Route path='/' element={<Login  />}/>
				// <Route path='/' element={<DropDownFile  />}/>
			// </Routes>
             <DropDownFile  />
             )}
    </div>
  );
}

export default App;