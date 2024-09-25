import React, { useState,useContext } from 'react';
import { BioContext } from '../../context/index.jsx'

const Login = () => {
  const {isOpen, setIsOpen} = useContext(BioContext);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
     
    {
      isOpen &&
     (
       <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center" onClick={()=>setIsOpen(false)}>
       <div className={`relative  px-12 py-16 rounded-lg  max-w-sm w-full ${isDarkMode ? 'bg-gray-600 text-gold' : 'bg-gray-50 text-black'} onClick={(e) => e.stopPropagation()`}>
         <button
           onClick={setIsOpen(false)}
           className={`absolute top-2 right-2 ${isDarkMode ? 'bg-gray-600 text-gold' : 'bg-gray-50 text-black'}`}
         >
           <img src={wrongIcon} height={40} width={40}/>
         </button>
         <h2 className="text-xl font-bold">
         <div className="mb-4">
<label className={`mr-6  text-md font-semibold mb-2  ${isDarkMode ? 'bg-gray-600 text-gold' : 'bg-gray-50 text-black'}`}>Seller</label>
<p  className={` px-10 rounded py-3 bg-gray-700  ${isDarkMode ? 'bg-gray-600 text-gold' : 'bg-gray-50 text-black'}`} placeholder='Name' >{"name"}
 {/* {details.seller} */}
 </p>
</div>

{/* Phone Input */}
<div className="mb-4">
<label className={`mr-6  text-md font-semibold mb-2  ${isDarkMode ? 'bg-gray-600 text-gold' : 'bg-gray-50 text-black'}`}>Phone</label>
<p  className={` px-10 rounded py-3 bg-gray-700  ${isDarkMode ? 'bg-gray-600 text-gold' : 'bg-gray-50 text-black'}`}>{"sellerPhone"}
 {/* {details.sellerPhone} */}
 </p>
</div>

{/* Email Input */}
<div className="mb-4">
<label className={`mr-6  text-md font-semibold mb-2  ${isDarkMode ? 'bg-gray-600 text-gold' : 'bg-gray-50 text-black'}`}>Address</label>
<p  className={` px-10 rounded py-3 bg-gray-700  ${isDarkMode ? 'bg-gray-600 text-gold' : 'bg-gray-50 text-black'}`} placeholder='Name' >{"address"}
 {/* {seller.sellerAddress} */}
 </p>
</div>
         </h2>
       </div>
     </div>
      )}
    </div>
  );
};

export default Login;
