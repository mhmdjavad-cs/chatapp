import "./user-info.css";
import defaultImg from "../assets/user_avatar.png";
import IconButton from "./icon-button";

const UserInfo = () => {
    return (
        <div className="user-info">
            
                <img
                    src={defaultImg}
                    alt="user avatar"
                    className="avatar"
                ></img>
                <div className="texts">
                    <h3 className="title-font username-text">username</h3>
                    <h5 className="navigate1">welcome to the chat app!</h5>
                </div>
            
            
                <IconButton
                    icon={<i className="bx bx-edit-alt icon"></i>}
                ></IconButton>
            
        </div>
    );
};

export default UserInfo;
