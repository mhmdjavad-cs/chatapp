import IconButton from "./icon-button";
import InputBox from "./input-box";
import "./search-bar.css"


const SearchBar = () => {
    return (
        <>
            <div className="search-bar">
                <InputBox
                    type="text"
                    placeholder="search user"
                    id="serach-box"
                    setFunc={() => {}}
                ></InputBox>
                <IconButton icon={<i className='bx bxs-search-alt-2 icon' ></i>}/>
            </div>
        </>
    );
};

export default SearchBar;
