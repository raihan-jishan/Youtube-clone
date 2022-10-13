// use state from  react 
import React, { useState } from "react";
//use Navigate from react router-dom 
import { useNavigate } from "react-router-dom";
//import icon from mui 
import { IconButton, Paper } from '@mui/material';
//searchIcon 
import SearchIcon from '@mui/icons-material/Search';
export default function SearchBar(){
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const onhandleSubmit = (e) => {
        e.preventDefault();
        //if else function

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);

            searchTerm('');
        }
    }
    // return function 
    return(
        //paper page 
        <Paper 
         style={{background:'rgba(143, 143, 143, 0.226)'}}
        component='form'
        onSubmit={onhandleSubmit}
        sx={{
            borderRadius: 20,
            borderRight: '1px solid #2dbf32',
            pl: 2,
            boxShadow: 'none',
            mr: { sm: 5 },
        }}
        >
            {/* input box */}
        <input 
    className="search-bar"
    placeholder="Search..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    
        />
        <IconButton type="submit" sx={{p: '10px',color:'red'}} aria-label="search">
        <SearchIcon />
        </IconButton>

        {/* end of the paper page */}
        </Paper>
    )
}