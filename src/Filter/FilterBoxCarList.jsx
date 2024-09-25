import React, { useEffect, useState ,useContext } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { CgSelectO } from "react-icons/cg";
import { FaFilter } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import TwoPointerInput from './TwoPointer';
import { BioContext } from '../context';
import axios from 'axios';

const FilterBoxCarList = ({theme}) => {
    
    const [state,setState] = useState(false);

    const [value,setValue] = useState([0,1000000]);

    const {filters,setFilters,isOpen, setIsOpen} = useContext(BioContext);

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/getData', {
              params: filters, // Send filters as query parameters
            });
            setData(response.data); // Update the data state with the response
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, [filters]); // Effect runs whenever filters change

     const navigate = useNavigate(); 

    useEffect(()=>{
        if(theme==="dark"){
            setState(true)
        }
        else{
            setState(false)
        }
    },[theme])

    const toggleDialog = () => {
      setIsOpen(!isOpen);
    };

    
    const handlePriceChange = (minPrice, maxPrice) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        minPrice,
        maxPrice,
      }));
    };

    const handlefilterChange = (e,filterType) => {
        setFilters({
            ...filters,
            [filterType] : e.target.value, 
        });
        navigate("/list");
        window.scrollTo(0, 0);
    }
   
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

  return (
    <div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 max-w-4xl mx-auto my-16">
        
 
        <select 
        value={filters.price}
        onChange={(e)=>handlefilterChange(e,'price')}
        class="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black aos-init aos-animate" >
            <option value={""} disabled class="font-bold text-dark">Price</option>
            <option value={""}>none</option>
            <option>50T-1L</option>
            <option>1L-5L</option>
            <option>5L-10L</option>
            <option>10L-13L</option>
        </select>
     
  <select 
  value={filters.brand}
  onChange={(e)=>handlefilterChange(e,'brand')}
   class="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black aos-init aos-animate">
    <option value={""} selected disabled class="font-bold text-dark">Brand </option>
    <option>none</option>
    <option>Mahindra</option>
    <option>TATA</option>
    <option>ROYAL</option>
    <option>YAMASAKI</option>
  </select>
        <select  
        value={filters.typeowner}
        onChange={(e)=>handlefilterChange(e,'typeowner')}
        class="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black aos-init aos-animate" >
            <option value={""} selected disabled class="font-bold text-dark">Type-Owner</option>
            <option value={""}>none</option>
            <option>Seller</option>
            <option>LocalSeller</option>
        </select>
        <select  
        value={filters.year}
        onChange={(e)=>handlefilterChange(e,'year')}
        class="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black aos-init aos-animate" >
            <option value={""} selected disabled class="font-bold text-dark">Year</option>
            <option value={""}>none</option>
            <option>2Y-4L</option>
            <option>4L-7L</option>
            <option>7L-10L</option>
            <option>10</option>
        </select>
        <select
        value={filters.performance}
        onChange={(e)=>handlefilterChange(e,'performance')}
        class="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black aos-init aos-animate" >
            <option value={""} selected disabled class="font-bold text-dark">Performance</option>
            <option value={""}>none</option>
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
        class="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black aos-init aos-animate" >
            <option value={""} selected disabled class="font-bold text-dark">Owner</option>
            <option value={""}>none</option>
            <option>FirstOwner</option>
            <option>ScondOwner</option>
            <option>ThirdOwner</option>
        </select>
        {/* <select 
         value={filters.mileage}
         onChange={(e)=>handlefilterChange(e,'mileage')}
       class="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black aos-init aos-animate" >
            <option value={""} selected disabled class="font-bold text-dark">MilLeag</option>
            <option value={""}>none</option>
            <option>50c-1lc</option>
            <option>1lc-5lc</option>
            <option>5lc-10lc</option>
            <option>10lc-13lc</option>
        </select>
        <select 
        value={filters.servicing}
        onChange={(e)=>handlefilterChange(e,'servicing')}
        class="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black aos-init aos-animate" >
            <option value={""} selected disabled class="font-bold text-dark">Servicing</option>
            <option value={""}>none</option>
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
</div>

  )
}

export default FilterBoxCarList
