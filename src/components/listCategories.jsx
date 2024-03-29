import { useEffect } from "react";
import { data } from "../utils/eventsCategoriesUtils/eventsCategoriesUtils.jsx";
import { useState } from "react";
import Container from "./listCategoriesContainer.jsx";
import React from 'react';
import "../css/mainView-style.css";
export function ListOfCategories(){
     const [dataUrl , setDataUrl] = useState(false)
     const [dataEvents , setDataEvents] = useState(false)
useEffect(()=>{
 data().then((result) =>{setDataUrl(result[1])
 setDataEvents(result[0])})
},[])
     return(<Container data1={dataUrl} data2={dataEvents}></Container>);
        }