import React, { useEffect } from "react";
import { useState } from "react";
import Catogries from "../../components/catgories/catogriess";
import Loder from "../../components/loder/loder";
import SearchBar from "../../components/SearchBar/searchBar";
import ApiService from "../../utils";
import LandingPage from "../landingPage";
import './index.scss'

const HomePage = () =>{
    const [allProduct, setAllProduct] = useState([]);
    const [selectedcat,setSelectedCat] = useState("");
    const [isLoded,setIsLoded] = useState(false)
    const [allcat, setAllCat] = useState([]);
    const getallcat = async () => {
        const data = await ApiService.getAllCatogries();
        setAllCat(data)
    }
    useEffect(() => {
        getallcat();
    }, [])
    const fectAllData = async () => {
        setIsLoded(false)
        const data = await ApiService.getAllData()
        setAllProduct(data)
        setIsLoded(true)
    }
    const getDataCat = async(cat)=>{
        setIsLoded(false)
        const data = await ApiService.getDataBycat(cat);
        setAllProduct(data)
        setIsLoded(true)
    }
    useEffect(() => {
        fectAllData()
    }, [])
    useEffect(()=>{
        if(selectedcat.length > 3){
            if(selectedcat == "All Products"){
                fectAllData()
            }
            else{
                getDataCat(selectedcat)
            }
        }
    },[selectedcat])
    return(
        <> 
            <SearchBar setSelectedCat={setSelectedCat} selectedcat={selectedcat} allcat={allcat} />
            <Catogries setSelectedCat={setSelectedCat} selectedcat={selectedcat} allcat={allcat}/>
            <LandingPage allProduct={allProduct}/>
            {!isLoded &&<Loder/>}
        </>
    )
}


export default HomePage