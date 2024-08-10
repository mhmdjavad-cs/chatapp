import { useEffect } from "react";
import SearchBar from "../components/search-bar";
import "./home.css";
import Line from "../components/line";
import UserInfo from "../components/user-info";
import ScrollBox from "../components/scroll-box";
import UserChat from "../components/user-chat";

const HomePage = () => {
    useEffect(() => {
        document.getElementById("root").classList.add("root");
    }, []);

    return (
        <div className="home_page">
            <div className="sidebar">
                <UserInfo/>
                <SearchBar />
                <Line/>
                <ScrollBox height={'520px'}>
                    <UserChat/>
                    <UserChat/>
                    <UserChat/>
                    <UserChat/>
                    <UserChat/>
                    <UserChat/>
                    <UserChat/>
                    <UserChat/>
                    <UserChat/>
                    <UserChat/>
                    <UserChat/>
                </ScrollBox>
            </div>
            <div className="body"></div>
            <div className="details"></div>
        </div>
    );
};

export default HomePage;
