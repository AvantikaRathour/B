import react,{useState,useEffect} from 'react';
import axios from "axios";
import BookCards from './BookCards';
const SearchBar=()=>{
    let [searchbarvalue,setsearchbarvalue]=useState()
    let [bookData,setbookData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.type==="click" || evt.key==="Enter"){
           let data=axios.get("https://www.googleapis.com/books/v1/volumes?q="+searchbarvalue+"&key=AIzaSyD5Np1JHB9Z5ichq0txBTS8v8FGRnMOAec"+"&maxResults=40").then(res=>
                setbookData(res.data.items)).catch(err=>console.log(err))
                // setbookData(res.data.items)
         let json=data.json;
         console.log(json);
    }
}
    return (
        <div>
        <div className="search-bar-cont">
              <input type="text" className="search-bar" value={searchbarvalue}
                onChange={(e)=>
                    setsearchbarvalue(e.target.value)
                } 
                onKeyDown={searchBook}  
                placeholder='type something...'
              />
              <button className="search-btn" onClick={searchBook}>Search</button>
        </div>
        <div className="container2">
                <BookCards  book={bookData} />
            </div>
        </div>
    )
}

export default SearchBar;