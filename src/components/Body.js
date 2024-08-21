import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import BookCards  from "../components/BookCards";
import QuoteGenerator from "./QuoteGenerator";
import Recommend from "./Recommend";
import { useState } from "react";
// import bookslider from "../components/bookslider"
const Body=()=>{
    const [Search,setSearch]=useState("");
    return (
        <div className="mainBody">
        <div className="container"> 
            <HeroSection/>
        </div>
        <div>
        <QuoteGenerator/>
        </div>
        <div>
            {/* <Recommend/> */}
            
        </div>
</div>
    )
}
export default Body;