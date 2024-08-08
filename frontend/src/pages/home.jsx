import { useEffect } from "react";
import SearchBar from "../components/search-bar";
import "./home.css"
import Line from "../components/line";


const HomePage = () => {


    useEffect(() => {
      document.getElementById('root').classList.add("root");
    }, [])
    



    return ( 
        <div className="home_page">
            <div className="sidebar">
                <SearchBar/>
                <Line/>
            </div>
            <div className="body">

            </div>
        </div>
     );
}
 
export default HomePage;

