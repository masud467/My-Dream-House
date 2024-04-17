import { useEffect, useState } from "react";


const useEstateData = () => {
    const [data,setData] = useState([]);
    const[loading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true)
            const res = await fetch ('/Estates.json');
            const data = await res.json();
            setData(data)
            setLoading(false)
        };
        fetchData();
    },[])

    return {data,loading}

};



export default useEstateData;