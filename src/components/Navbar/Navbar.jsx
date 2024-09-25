// import React, { useState } from "react";
// import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
// import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
// import ResponsiveMenu from "./ResponsiveMenu";

// export const Navlinks = [
//   // {
//   //   id: 1,
//   //   name: "Home",
//   //   link: "/#",
//   // },
//   {
//     id: 2,
//     name: "myVehicle",
//     link: "/#cars",
//   },
//   {
//     id: 1,
//     name: "favourite",
//     link: "/#about",
//   },
//   {
//     id: 1,
//     name: "login",
//     link: "/#booking",
//   },
// ];
// const Navbar = ({ theme, setTheme }) => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };
//   return (
//     <div
//       className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300
//     "
//     >
//       <div className="container py-2 md:py-0">
//         <div className="flex justify-between items-center">
//           <div>
//             <span className="text-3xl font-bold font-serif">CarByk.com</span>
//           </div>
//           <nav className="hidden md:block">
//             <ul className="flex items-center gap-8">
//               {Navlinks.map(({ id, name, link }) => (
//                 <li key={id} className="py-4">
//                   <a
//                     href={link}
//                     className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
//                   >
//                     {name}
//                   </a>
//                 </li>
//               ))}
//               {/* DarkMode feature implement */}
//               {theme === "dark" ? (
//                 <BiSolidSun
//                   onClick={() => setTheme("light")}
//                   className="text-2xl"
//                 />
//               ) : (
//                 <BiSolidMoon
//                   onClick={() => setTheme("dark")}
//                   className="text-2xl"
//                 />
//               )}
//             </ul>
//           </nav>
//           {/* Mobile view  */}
//           <div className="flex items-center gap-4 md:hidden ">
//             {/* dark  mode */}
//             {theme === "dark" ? (
//               <BiSolidSun
//                 onClick={() => setTheme("light")}
//                 className="text-2xl"
//               />
//             ) : (
//               <BiSolidMoon
//                 onClick={() => setTheme("dark")}
//                 className="text-2xl"
//               />
//             )}
//             {/* Mobile Hamburger icon */}
//             {showMenu ? (
//               <HiMenuAlt1
//                 onClick={toggleMenu}
//                 className=" cursor-pointer transition-all"
//                 size={30}
//               />
//             ) : (
//               <HiMenuAlt3
//                 onClick={toggleMenu}
//                 className="cursor-pointer transition-all"
//                 size={30}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//       <ResponsiveMenu showMenu={showMenu} />
//     </div>
//   );
// };

// export default Navbar;



import React, { useState, useRef, useEffect ,useContext} from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { BioContext } from '../../context/index'
import { MdClear } from "react-icons/md";


export const Navlinks = [
  {
    id: 2,
    name: "myVehicle",
    link: "/#cars",
  },
  {
    id: 1,
    name: "favourite",
    link: "/#about",
  },
  {
    id: 1,
    name: "login",
    link: "/#booking",
  },
];

const Navbar = ({ theme, setTheme }) => {


























  const { filters, setFilters , login , setLogin , isOpen, setIsOpen } = useContext(BioContext);






  const [isDarkMode, setIsDarkMode] = useState(false);


  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState(true); // By default, assume valid

  const [phone,setPhone] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(true); 


  const validateName = (nameE) => {
    const nameRegex = /^[A-Za-z\s]+$/; // Allows only alphabets and spaces
    return nameRegex.test(nameE);
  };

  // Handle the input change event
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);

    // Validate the name
    if (value === '' || !validateName(value) || value.length < 3) {
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }
  };

// Function to validate the phone number
function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10}$/; // Matches formats like (123) 456-7890 or 123-456-7890
    return phoneRegex.test(phoneNumber);
}



  const handleClickPhone = (e) => {
  const value = e.target.value
  setPhone(value)
  if (value === '' || !validatePhoneNumber(value)) {
    setIsPhoneValid(false);
  } else {
    setIsPhoneValid(true);
  }
   }




  
const openDialog = () => setIsOpen(true);
const closeDialog = () => setIsOpen(false);

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);



// authnetication


const [showOtp,setShowOtp] = useState(false)



const [otp, setOtp] = useState('');
const [isOtpValid, setIsOtpValid] = useState(true); // By default, assume valid

const validateFourDigits = (input) => {
  const fourDigitRegex = /^\d{4}$/; // Matches exactly 4 digits
  return fourDigitRegex.test(input);
};










const [changeButton,setChangeButton] = useState(false)
const [errorOtp,setErrorOtp] = useState(false)













// Handle the input change event
const handleOtpChange = (e) => {
  const value = e.target.value;
  setOtp(value);

  // Validate the name
  if (value === '' || !validateFourDigits(value)) {
    setIsOtpValid(false);
  } else {
    setIsOtpValid(true);
  }
};




const [responseOkayOtp,setResponseOkayOtp] = useState(false)




const sendOtpToUserPhone = async () => {
  try {
    const response = await fetch('https://api.carbyk.com/api/user/sendLoginOTP', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phoneCountryCode: '+91', // countryCode as a string
        phoneNumber: phone
      })
    });
    let data = await response.json()
    console.log("respones ", data)

    // Check if the response is okay before parsing JSON
    if (!data?.success) {
      setResponseOkayOtp(false)
      // throw new Error(`Error: ${data?.status} ${data?.message}`);
        setErrorOtp(true)
        console.log(`Error: ${data?.status} ${data?.message}`);
    }
    else{
      setResponseOkayOtp(true)
    }

    // const data = await response.json(); // Parsing response data
    // console.log(data);
  } catch (error) {
    console.log(error);  // Error handling
  }
};



// useEffect(()=>{
//   handleOtpChange
// },[responseOkayOtp])



const verifyOTP = async () => {
  try {
    let data = await fetch('https://api.carbyk.com/api/user/verifyOTP', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phoneCountryCode: '+91', // countryCode as a string
        phoneNumber: phone,
        name:name,
        otp:Number(otp)
      })
    });
    data = await data.json()
    console.log("respones ", data)
    console.log("respones ", data.data)

    // Check if the response is okay before parsing JSON
    if (!data?.success) {
      //  setResponseOkayOtp(false)
      // throw new Error(`Error: ${data?.status} ${data?.message}`);
        // setErrorOtp(true)
        console.log(`Error: ${data?.status} ${data?.message}`);
    }
    else{
      // setResponseOkayOtp(true)
      console.log("user data ",data.user)
      console.log("token ", data.token)
      localStorage.setItem('user',JSON.stringify(data.user))
      localStorage.setItem('token',JSON.stringify(data.token))
      setIsOpen(false)
      setLogin(true)
    }

    // const data = await response.json(); // Parsing response data
    // console.log(data);
  } catch (error) {
    console.log(error);  // Error handling
  }
};









const handleSendOtp = async() => {
if(!name || !phone || !isNameValid || !isPhoneValid){
setIsNameValid(false)
setIsPhoneValid(false)
}  
else{
  if(!responseOkayOtp){
    sendOtpToUserPhone()
  }
  else{
    verifyOTP()
  }
}
}


useEffect(()=>{
  if(responseOkayOtp){
    setShowOtp(true)
    setChangeButton(true)
  }
  else{
    setShowOtp(false)
    setChangeButton(false)
  }
},[responseOkayOtp])


useEffect(()=>{
  if(!isPhoneValid || !isNameValid){
    setResponseOkayOtp(false)
  }
},[isNameValid,isPhoneValid])



const handleChangePhoneNumber = () => {
  
  setShowOtp(false)
  changeButton(false)
  
}


















































  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null); // Create a ref for the menu

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false); // Close the menu if clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-3xl font-bold font-serif">CarByk.com</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {/* {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))} */}

<li className="py-4">

<a href={"/"} className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                   myVehicle
                    </a>
</li>

<li className="py-4">

<a href={"/"} className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                   favourite
                    </a>
</li>

{
  login  ?
  <>
  
<li className="py-4">

<button onClick={()=>setIsOpen(true)} className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                   logout
                    </button>
</li>

  </>
  :
  <>
  
<li className="py-4">

<button onClick={()=>setIsOpen(true)} className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                 login
                    </button>
</li>

  </>
}


















{!login && 
<div className="relative">
  {isOpen && (
    <div className="fixed inset-0 flex items-center  justify-center bg-black bg-opacity-50 z-60">
      <div className="relative bg-white p-10 shadow-lg w-[486px]">
        {/* Modal content */}
        <h2 className="text-xl font-semibold mb-3 text-dark">Login</h2>
        
        {/* Name Input */}
        <label className="block text-sm font-medium text-gray-700 mt-10 mb-1" htmlFor="name">
          Name*
        </label>
        <input
          type="text"
          id="name"
          onChange={handleNameChange}
          onBlur={handleNameChange} 
          className="border-b border-gray-300 text-dark focus:outline-none focus:ring-0 focus:border-blue-500 w-full mb-4"
          placeholder="Name"
        />
         {!isNameValid && <p style={{ color: 'red' }}>Invalid name</p>}

        {/* Phone Input */}
        <label className="block text-sm font-medium text-gray-700 mt-5 mb-1" htmlFor="phone">
          MoblieNo* 
        </label>
        <input
          type="text"
          id="phone"
          onChange={handleClickPhone}
          onBlur={handleClickPhone} 
          className="border-b border-gray-300 text-dark focus:outline-none focus:ring-0 focus:border-blue-500 w-full mb-1"
          placeholder="MoblieNo"
        />
        {
          changeButton && (<>
          <button className="border-none   text-red-900" onClick={handleChangePhoneNumber} >changePhone</button>
          </>)
        }
        {
          !isPhoneValid ? <p style={{color:'red'}}>Please enter your correct Mobile No.</p> : ''
        }
{
  errorOtp ? 'not send some Error': ''
}


       {
       showOtp && (<>
       
       <label className="block text-sm font-medium text-gray-700 mt-5 mb-1" htmlFor="phone">
          OTP* 
        </label>
        <input
          type="text"
          id="OTP"
          onChange={handleOtpChange}
          onBlur={handleOtpChange} 
          className="border-b border-gray-300 text-dark focus:outline-none focus:ring-0 focus:border-blue-500 w-full mb-4"
          placeholder="OTP"
        />
        {
          !isOtpValid ? <p style={{color:'red'}}>Please enter your correct OTP</p> : ''
        }

       </>)

       }



        {/* Submit Button */}
        <button
          className="w-[92%] ml-4 bg-red-600 text-white mt-8 font-semibold py-2 rounded-[8px] hover:bg-red-700 transition duration-300"
          onClick={() => {
            // 
            handleSendOtp()
            // 
          }}
         
        >
        {responseOkayOtp ? "Verify OTP" :  "Login" }
        </button>

        {/* Close button outside, 2px away */}
        <MdClear 
          className="absolute -top-0 -right-8 cursor-pointer text-4xl"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </div>
  )}
</div>


}











{
  login && 
  <div className="relative">
  {isOpen && (
    <div className="fixed inset-0 flex items-center  justify-center bg-black bg-opacity-50 z-60">
      <div className="relative bg-white p-10 shadow-lg w-[486px]">
        {/* Modal content */}
        <h2 className="text-xl font-semibold mb-3 text-dark">YOUR ACCOUT</h2>
        <p className="text-gray-600 mb-5 text-[12px] w-full" style={{}} ></p>

        {/* Name Input */}
        <label className="block text-sm font-medium text-gray-700 mt-10 mb-1" htmlFor="name">
          Name : JOHN DOE
        </label>
      
        {/* Phone Input */}
        <label className="block text-sm font-medium text-gray-700 mt-5 mb-1" htmlFor="phone">
          MoblieNo : +91 1234567890
        </label>
       

        {/* Submit Button */}
        <button
          className="w-[92%] ml-4 bg-red-600 text-white mt-8 font-semibold py-2 rounded-[8px] hover:bg-red-700 transition duration-300"
          onClick={() => setIsOpen(false)}
        >
          LogOut
        </button>

        {/* Close button outside, 2px away */}
        <MdClear 
          className="absolute -top-0 -right-8 cursor-pointer text-4xl"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </div>
  )}
</div>
  

}




































              {/* DarkMode feature */}
              {theme === "dark" ? (
                <BiSolidSun onClick={() => setTheme("light")} className="text-2xl" />
              ) : (
                <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl" />
              )}
            </ul>
          </nav>
          {/* Mobile view */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Dark mode */}
            {theme === "dark" ? (
              <BiSolidSun onClick={() => setTheme("light")} className="text-2xl" />
            ) : (
              <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl" />
            )}
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
            ) : (
              <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
            )}
          </div>
        </div>
      </div>
      <div ref={menuRef}>
        <ResponsiveMenu showMenu={showMenu} />
      </div>
    </div>
  );
};

export default Navbar;
