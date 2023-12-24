import { useState } from "react";
import { Paper, TextField } from "@mui/material";

const SearchBar = ({onSubmit})=>{
    const [searchItem, setSearchItem] = useState('');
    const handleChange = (event) => setSearchItem(event.target.value);
    const onKeyDown = (event) =>{
        if(event.key === "Enter"){
            onSubmit(searchItem)
        }
    }

    return (
        <Paper elevation={6} style={{marginTop: '25px'}}>
            <TextField 
                fullWidth
                label="Search..."
                value={searchItem}
                onChange={handleChange}
                onKeyDown={onKeyDown}
            />
        </Paper>
    );
}

export default SearchBar;