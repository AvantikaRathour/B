import { img2 } from "../utils/constants"
const BookCards = ({ book }) => {
    console.log(book)
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let bookamount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                   if(thumbnail!=undefined && bookamount!=undefined){
                    return (
                        
                        <div className="card">
                            <img src={thumbnail} />
                            <div className="bottom">
                                <h5 className="title2">{item.volumeInfo.title}</h5>
                                <p className="amount">&#8377;{bookamount}</p>
                            </div>
                        </div>
                        )
                   }
               })
            }
        </>

                    )}
export default BookCards;





