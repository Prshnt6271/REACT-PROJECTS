import React, { useEffect, useState } from "react";

import axios from 'axios';

function Ab(){

    const [values,setValues]=useState([]);
  
    const loaddata=async()=>{
        const res=await axios.get("https://jsonplaceholder.typicode.com/photos");
       console.log(res);
       console.log(res.status);

    }
    useEffect(()=>{
        loaddata();
    },[])
   
  
}

export default Ab;