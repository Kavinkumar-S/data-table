import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
export default function Post(){
    const {id} = useParams();
    console.log("userId",id);
    const [data,setData] = useState([])
    useEffect(()=>{
        getData();
    },[id])

    const getData= async()=>{
    let response = await axios.get(`https://jsonplaceholder.typicode.com/comments?id=${id}`)
    console.log("response",response.data)    
    setData(response.data)
    }


    return (
    <>
{
    data.map(data=>
        <div class="card">
        
        <p>{data.name}</p>
        <p>{data.email}</p>
        <p>{data.body}</p>
        
        <Link to="/">
          back to home
        </Link>
          </div>
    )
  
}

    

    </>
    )

}