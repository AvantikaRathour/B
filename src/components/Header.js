import {booklogo,menulogo,profilelogo,searchlogo,moonlogo} from "../utils/constants";
 import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="myhead">
            <div className="top_nav">
                <img src={booklogo}/>
                    <h4 className="text-color">Bookverse</h4>
            </div>
            <ul>

                <div className="mid_nav">
                   <Link to="/home"><li  class="text-color">Home</li></Link>
                    <li><a href="" class="text-color">About</a></li>
                    <Link><li class="text-color">Explore</li></Link>
                    <Link to="/mybooks"><li  class="text-color">My Books</li></Link>
                </div>
                <div className="end_nav">
                    <img src={searchlogo} alt=""/>
                        <img src={profilelogo} alt=""/>
                            <img src={moonlogo} id="menu-button" alt=""/>
                            </div>
                            <label class="menu-btn">
                                <img src={menulogo}/>
                            </label>
            </ul>
        </div>
        )
}
export default Header;