import { useState,useEffect } from "react";
function useProductCategory(type){
    const [data,setData]=useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${type}?limit=4`)
        .then(res=>res.json())
        .then((res)=>setData(res))
    }, [type])
    return data;
    

}
export default useProductCategory;