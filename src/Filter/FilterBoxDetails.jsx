import React, { useEffect, useState ,useContext } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { CgSelectO } from "react-icons/cg";
import { FaFilter } from "react-icons/fa";
import { BioContext } from '../context';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdClear } from "react-icons/md";


import whiteCar from "../assets/white-car.png";
import car2 from "../assets/car5.png";
import car3 from "../assets/car6.png";
import TwoPointerInput from './TwoPointer';


const FilterBoxDetails = ({theme}) => {

    const { filters, setFilters , login , setLogin , isOpen, setIsOpen } = useContext(BioContext);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [text,setText] = useState('Details')


    const handlePriceChange = (minPrice, maxPrice) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        minPrice,
        maxPrice,
      }));
    };

    const handlefilterChange = (e, filterType) => {
      setFilters({
        ...filters,
        [filterType]: e.target.value,
      });
    };  

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
      if (value === '' || !validateName(value)) {
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
  

    const [selectedCar, setSelectedCar] = useState(null);

    const toggleDialog = () => {
    !login ?  setIsOpen(!isOpen) : setIsOpen(false);
    };
    
    const handleToChange = (car) => {
      login ? setText(car.name) : setIsOpen(true)
      // toggleDialog()
      setSelectedCar(car)
    }

    const [value,setValue] = useState([0,1000000]);

    // useEffect(()=>{
    //   handleToChange()
    //   // toggleDialog()
    // },[isOpen])

    // useEffect(()=>{
    //   handlefilterChange(),
    //   handleToChange(),
    //   toggleDialog()
    // },[toggleDialog])



    const carList = [
        {
          name: "BMW UX",
          price: 100,
          image: whiteCar,
          aosDelay: "0",
        },
        {
          name: "BMW UX",
          price: 100,
          image: whiteCar,
          aosDelay: "0",
        },
        {
          name: "KIA UX",
          price: 140,
          image: car2,
          aosDelay: "500",
        },
        {
            name: "BMW UX",
            price: 100,
            image: whiteCar,
            aosDelay: "0",
          },
          {
            name: "BMW UX",
            price: 100,
            image: whiteCar,
            aosDelay: "0",
          },
          {
            name: "KIA UX",
            price: 140,
            image: car2,
            aosDelay: "500",
          },
          {
            name: "BMW UX",
            price: 100,
            image: whiteCar,
            aosDelay: "0",
          },
          {
            name: "BMW UX",
            price: 100,
            image: whiteCar,
            aosDelay: "0",
          },
          {
            name: "KIA UX",
            price: 140,
            image: car2,
            aosDelay: "500",
          },
          {
            name: "BMW UX",
            price: 100,
            image: whiteCar,
            aosDelay: "0",
          },
          {
            name: "BMW UX",
            price: 100,
            image: whiteCar,
            aosDelay: "0",
          },
          {
            name: "KIA UX",
            price: 140,
            image: car2,
            aosDelay: "500",
          },
          {
              name: "BMW UX",
              price: 100,
              image: whiteCar,
              aosDelay: "0",
            },
            {
              name: "BMW UX",
              price: 100,
              image: whiteCar,
              aosDelay: "0",
            },
            {
              name: "KIA UX",
              price: 140,
              image: car2,
              aosDelay: "500",
            },
            {
              name: "BMW UX",
              price: 100,
              image: whiteCar,
              aosDelay: "0",
            },
            {
              name: "BMW UX",
              price: 100,
              image: whiteCar,
              aosDelay: "0",
            },
            {
              name: "KIA UX",
              price: 140,
              image: car2,
              aosDelay: "500",
            }
      ];
      

      const [rangeValue, setRangeValue] = useState(0);

      const handleRangeChange = (e) => {
        const value = Number(e.target.value);
        let newValue = value;
      
        if (value > 0 && value < 100000) {
          newValue = 100000;
        } else if (value >= 100000 && value < 200000) {
          newValue = 200000;
        } else if (value >= 200000 && value < 300000) {
          newValue = 300000;
        } else if (value >= 300000 && value < 400000) {
          newValue = 400000;
        } else if (value >= 400000 && value < 500000) {
          newValue = 500000;
        } else if (value >= 500000 && value < 600000) {
          newValue = 600000;
        } else if (value >= 600000 && value < 700000) {
          newValue = 700000;
        } else if (value >= 700000 && value < 800000) {
          newValue = 800000;
        } else if (value >= 800000 && value < 900000) {
          newValue = 900000;
        } else if (value >= 900000 && value < 1000000) {
          newValue = 1000000;
        }
      
        setRangeValue(newValue);
      };


console.log( login , isOpen);

   

  return (
    <div>









    <div class="grid  grid-cols-2  md:grid-cols-4 gap-4 p-4 max-w-4xl mx-auto my-16">
        <select 
        value={filters.price}
        onChange={(e)=>handlefilterChange(e,'price')}
        data-aos="fade-up" data-aos-delay="1500" class="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black aos-init aos-animate" >
            <option value={""} selected disabled class="font-bold text-dark">Price</option>
            <option value={""}>none</option>
            <option>50T-1L</option>
            <option>1L-5L</option>
            <option>5L-10L</option>
            <option>10L-13L</option>
        </select>
     
  <select 
  value={filters.brand}
  onChange={(e)=>handlefilterChange(e,'brand')}
  data-aos="fade-up" data-aos-delay="1500" class="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black aos-init aos-animate">
    <option value={""} selected disabled class="font-bold text-dark">Brand </option>
    <option  value={""}>none</option>
    <option>Mahindra</option>
    <option>TATA</option>
    <option>ROYAL</option>
    <option>YAMASAKI</option>
  </select>
        <select  
        value={filters.typeowner}
        onChange={(e)=>handlefilterChange(e,'typeowner')}
        data-aos="fade-up" data-aos-delay="1500" class="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black aos-init aos-animate" >
            <option value={""} selected disabled >Type-Owner</option>
            <option  value={""}>none</option>
            <option>Seller</option>
            <option>LocalSeller</option>
        </select>
        <select  
        value={filters.year}
        onChange={(e)=>handlefilterChange(e,'year')}
        data-aos="fade-up" data-aos-delay="1500" class="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black aos-init aos-animate" >
            <option value={""} selected disabled class="font-bold text-dark">Year</option>
            <option  value={""}>none</option>
            <option>2Y-4L</option>
            <option>4L-7L</option>
            <option>7L-10L</option>
            <option>10</option>
        </select>
        <select
        value={filters.performance}
        onChange={(e)=>handlefilterChange(e,'performance')}
        data-aos="fade-up" data-aos-delay="1500" class="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black aos-init aos-animate" >
            <option value={""} selected disabled class="font-bold text-dark">Performance</option>
            <option  value={""}>none</option>
            <option>100c-500c</option>
            <option>500c-1500c</option>
            <option>1500c-5000c</option>
            <option>5000c-9000c</option>
            <option>9000c-13000c</option>
            <option>13000c</option>
        </select>
        <select  
        value={filters.owner}
        onChange={(e)=>handlefilterChange(e,'owner')}
        data-aos="fade-up" data-aos-delay="1500" class="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black aos-init aos-animate" >
            <option value={""} selected disabled class="font-bold text-dark">Owner</option>
            <option  value={""}>none</option>
            <option>FirstOwner</option>
            <option>ScondOwner</option>
            <option>ThirdOwner</option>
        </select>
        {/* <select 
         value={filters.mileage}
         onChange={(e)=>handlefilterChange(e,'mileage')}
        data-aos="fade-up" data-aos-delay="1500" class="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black aos-init aos-animate" >
            <option value={""} selected disabled class="font-bold text-dark">MilLeag</option>
            <option  value={""}>none</option>
            <option>50c-1lc</option>
            <option>1lc-5lc</option>
            <option>5lc-10lc</option>
            <option>10lc-13lc</option>
        </select>
        <select 
        value={filters.servicing}
        onChange={(e)=>handlefilterChange(e,'servicing')}
        data-aos="fade-up" data-aos-delay="1500" class="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black aos-init aos-animate" >
            <option value={""} selected disabled class="font-bold text-dark">Servicing</option>
            <option  value={""}>none</option>
            <option>No SERVICE</option>
            <option>1T</option>
            <option>2T-5T</option>
            <option>10T</option>
        </select> */}
              <div className="rounded-md  flex flex-row justify-between items-center bg-primary hover:bg-primary/80 transition duration-500 py-2 px-12 text-black aos-init aos-animate col-span-2">
    {/* <input type="range" className="w-[96%] " min={0} max={1000000} onChange={handleRangeChange} value={rangeValue} />
    <span className='ml-2 flex justify-center items-center'>{<FaIndianRupeeSign />}{rangeValue}</span> */}
    <TwoPointerInput handlePriceChange={handlePriceChange} value={value} setValue={setValue} />
  </div>
    </div>

    <div className='mx-8'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data,index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-4 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-around items-center text-xl font-semibold">
                    <p>${data.price}/Day</p>
                    <button onClick={()=>{handleToChange(data),toggleDialog()}}>{ login ? text : "Details" }</button>
                  </div>
                </div>
               
              </div>
            ))}
                 
          </div>

        </div>
        <div className="relative">
  {isOpen && (
    <div className="fixed inset-0 flex items-center  justify-center bg-black bg-opacity-50 z-60">
      <div className="relative bg-white p-10 shadow-lg w-[486px]">
        {/* Modal content */}
        <h2 className="text-xl font-semibold mb-3 text-dark">See Seller Details</h2>
        <p className="text-gray-600 mb-5 text-[12px] w-full" style={{}} >Enter your name and mobile number to instantly see this seller's details</p>

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
          className="border-b border-gray-300 text-dark focus:outline-none focus:ring-0 focus:border-blue-500 w-full mb-4"
          placeholder="MoblieNo"
        />
        {
          !isPhoneValid ? <p style={{color:'red'}}>Please enter your correct Mobile No.</p> : ''
        }

        {/* Submit Button */}
        <button
          className="w-[92%] ml-4 bg-red-600 text-white mt-8 font-semibold py-2 rounded-[8px] hover:bg-red-700 transition duration-300"
          onClick={() => setIsOpen(false)}
        >
          Submit
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

      


</div>

  )
}

export default FilterBoxDetails
