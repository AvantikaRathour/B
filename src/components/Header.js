import { booklogo, menulogo, profilelogo, searchlogo, moonlogo } from "../utils/constants";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useNavigate } from 'react-router-dom';
const Header = () => {
        const navigate = useNavigate();  
        const handleClick = () => {
            navigate('/search'); // or the current path
        };
        const loginpage=()=>{
            navigate('login');
        }
    return (
        <div className="myhead">
            <div className="top_nav">
                <img src={booklogo} />
                <h4 className="text-color">Bookverse</h4>
            </div>
            <ul>
                <div className="mid_nav">
                    <Link to="/home"><li class="text-color textstyle">Home</li></Link>
                    <Link to=""><li class="text-color textstyle">About</li></Link>
                    <li class="text-color drop textstyle">Explore
                        <ul className="dropmenu">
                            <Link to="/mybooks"><li class="text-color">My Books</li></Link>
                        </ul>
                    </li>
                </div>
                <div className="end_nav">
                    <img src={searchlogo} onClick={handleClick} alt="" />
                    <img src={profilelogo} alt="" onClick={loginpage} />
                    {/* <img src={moonlogo} id="menu-button" alt="" /> */}
                </div>
                <label class="menu-btn">
                    <img src={menulogo} />
                </label>
            </ul>
        </div>
    )
}
export default Header;