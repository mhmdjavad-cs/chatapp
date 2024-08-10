import './user-chat.css'
import defaultImg from '../assets/user_avatar.png'


const UserChat = () => {
    return <div className='user-chat'>
        <img
                    src={defaultImg}
                    alt="user avatar"
                    className="avatar"
                ></img>
                <div className="texts">
                    <h3 className="title-font username-text">username</h3>
                    <h5 className="navigate1">no message yet!</h5>
                </div>
    </div>;
}
 
export default UserChat;