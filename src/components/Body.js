import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import BookCards  from "../components/BookCards";
import { useState } from "react";
// import bookslider from "../components/bookslider"
const Body=()=>{
    const [Search,setSearch]=useState("");
    return (
        <div className="container"> 
            <HeroSection/>
            <SearchBar/>
        </div>

    )
}
export default Body;