import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import MyBooks from "./components/MyBooks";
const AppLayout=()=>{
   
return ( 
    <div>
        
     <Header/>
    <Outlet/>     
    </div>
)
};
const approuter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                
                path:"/mybooks",
               element:<MyBooks/>
            },
            {
                path:"/home",
                element:<Body/>
            }
        ]
    }
])
const roott=ReactDOM.createRoot(document.getElementById("root"));
roott.render(<RouterProvider router={approuter}/>)