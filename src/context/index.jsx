import { createContext, useState } from "react";

export const BioContext = createContext();

export const Bioprovider = ({ children }) => {
    const [filters, setFilters] = useState({
        price: '',
        brand:'',
        typeowner: '',   // Changed to camelCase for consistency
        year: '',
        performance: '',
        owner: '',
        mileage: ''    , // Corrected typo from milLeg to mileage
        servicing: '',

    });




    const [isOpen, setIsOpen] = useState(false);

    const [login,setLogin] = useState(false);

    const value = { filters, setFilters ,setLogin , login ,isOpen, setIsOpen};

    return <BioContext.Provider value={value}>{children}</BioContext.Provider>;
};
