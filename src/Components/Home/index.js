import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Header from "./header";
import axios from "axios";
import TablePagination from '@mui/material/TablePagination';
import { Outlet, Link } from "react-router-dom";
const Home=()=>{
    
    const [postdata,setPostdata] = useState([])
    const [sortby, setSortby] = useState('id');
    const [sortorder, setSortorder] = useState('asc');    
    const [search,setSearch] = useState("")
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [loading,setLoading] = useState(false);

 
   
    useEffect(()=>{
        getPostData()
    },[search,sortby,sortorder,page,rowsPerPage])


    const getPostData=async()=>{
try {
    setLoading(true)
    let response = await axios.get(`${process.env.REACT_APP_BASEURL}?q=${search}&_sort=${sortby}&_order=${sortorder}&_limit=${rowsPerPage}&_page=${page}`)
    // let response = await axios.get(`${process.env.REACT_APP_BASEURL}?q=${search}&_sort=id&_order=desc&_limit=5`)

    
    console.log("response",response)    
    setPostdata(response.data)
    setLoading(false)

} catch (error) {
    console.log("error in getpostdata",error)
}
    }


    console.log("abc",postdata)
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(1);
      };


 return(<>
    {/* <CssBaseline /> */}
      <Container maxWidth="md">
   
<>
<Header
    sortby={sortby}
    setSortby={setSortby}
    sortorder={sortorder}
    setSortorder={setSortorder}
    search={search}
    setSearch={setSearch}    
    />
       
        <TableContainer component={Paper}>
      <Table 
   
       aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Id</TableCell>

            <TableCell>Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Description</TableCell>
            
          </TableRow>
        </TableHead>
        {
        loading ?
        <>
        Loading...
        </>
        :
        (  
        <TableBody>
          {postdata.map((data) => (
            <TableRow
              key={data.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                 <TableCell align="left">
                  
{data.id}
                
                    </TableCell>
              <TableCell component="th" scope="row">
              {/* <a href={`/post/${data.id}`}> */}
              <Link to={`/post/${data.id}`} style={{textDecoration:"none",color:"inherit"}}>
                {data.name}
                {/* </a> */}
</Link>
              </TableCell>
              <TableCell align="left">{data.email}</TableCell>
              <TableCell align="left">{data.body}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      
      
      )
    }  
    
      </Table>
    </TableContainer>
    {
        loading ?
        ""
:    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
    }  
</>

    
      </Container>
   
  
    </>)
}

export default Home;