import React,{useState} from "react";
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
const Header =({sortby,setSortby,sortorder,setSortorder,search,setSearch})=>{
   
   

    const handleChange = (event) => {
        setSortby(event.target.value);
console.log("event.target.value",event.target.value)
    };
   
    
    const handlesortChange = (event) => {
        setSortorder(event.target.value);
    // console.log("event.target.value",event.target.value)
 
};
   return(<>
        <Grid container 
        justifyContent={"space-between"}
        textAlign={"center"}
        // rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
        <Grid item xs={4}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">SortBy</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
        
          onChange={handleChange}
          label="SortBy"
        >
          <MenuItem value="id">
            <em>default</em>
          </MenuItem>
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="email">Email</MenuItem>
          {/* <MenuItem value="">Thirty</MenuItem> */}
        </Select>
      </FormControl>
        </Grid>
    
        <Grid item xs={4}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
        //   value={age}
          onChange={handlesortChange}
          label="Sort"
        >
          <MenuItem value="">
            <em>default</em>
          </MenuItem>
          <MenuItem value="asc">ascend order</MenuItem>
          <MenuItem value="desc">descend order</MenuItem>
       
        </Select>
      </FormControl>
        </Grid>
    
            <Grid item xs={4} >
        <TextField id="standard-basic" label="Search Here" variant="standard"
        onChange={(e)=>{
            setSearch(e.target.value)
        }}
        />
        </Grid>
      </Grid> 
    </>)
}

export default Header;