// import { Component } from "react";
import Bookslider from "../components/bookslider";
const HeroSection=()=>{
return (
    <div className="section">
         <div className="col">
            <h1 className="title">Browse & Select E-Books</h1>
            <p className="info">Find the best e-books from your favorite writers,explore hundreds of books with all possible categories,take advantage of the 50% discount and much more..</p>
            <button className="btn">Explore Now</button>
         </div>
         <div className="col2">
           <Bookslider/>
         </div>

    </div>
)
}
export default HeroSection;