import React, { useEffect, useState } from "react"
import { FaXTwitter } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";
const QuoteGenerator = () => {
    const [quote, setQuote] = useState({
        quote: "You can always edit a bad page. You can’t edit a blank page.",
        author: "Jodi Picoult"
    })
    const [quote2,setQuote2]=useState([]);

  useEffect(()=>{
  loadQuotes();
  },[])
  const twitter=()=>{
    window.open(`https://twitter.com/intent/tweet?text=${quote.text}-${quote.author.split(',')[0]}`)
  }  
  const randomQuote=()=>{
     const select=quote2[Math.floor(Math.random()*quote2.length)]
     console.log(select)
     setQuote(select)
  }
     const  loadQuotes=async ()=>{
        try {
          const response = await fetch("https://dummyjson.com/quotes");
            if (!response.ok) {
              throw new Error("Network response was not ok");
          }
            const data = await response.json();
            setQuote2(data.quotes);
            console.log(data.quotes[8].quote); // Changed to log 'data' instead of 'quote2' to ensure correct logging
          } catch (error) {
            console.error("Error fetching quotes:", error);
          }
    }
    return (
        <div className="quoteCont">
            <div className="quote">{quote.quote}</div>
            <div>
                <div className="line"></div>
                <div className="quoteBottom">
                    <div className="author">- {quote.author.split(",")[0]}</div>

                    <div className="quoteicons ">
                        < IoReload onClick={()=>{
                           randomQuote();
                        }}/>
                        <FaXTwitter onClick={()=>{
                          twitter();
                        }} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default QuoteGenerator;