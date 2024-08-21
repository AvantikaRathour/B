// import React, { useState } from "react"
// import { useEffect } from "react";
// const Recommend = () => {
//     const [recommendationdata,setrecommendationdata]=useState();
//     useEffect(() => {
//         loadQuotes()
//     }, [])
//     const loadQuotes = async () => {
//         try {
//             const response = await fetch("http://localhost:5000/api/data");
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             const data = await response.json();
//             setrecommendationdata(data.data1)
//              // Changed to log 'data' instead of 'quote2' to ensure correct logging
//         } catch (error) {
//             console.error("Error fetching quotes:", error);
//         }
//     }
//     console.log(recommendationdata)
//     return (
//         <div>
//             {/* <h1>Recommend</h1> */}
//             <div>
//                 {
//                 // recommendationdata.map((item)=()=>{
//                 //    
//                 // })
//             //  <h2>{recommendationdata[0]}</h2>
//                 }
//             </div>
//         </div>
//     )
// }
// export default Recommend;