import './scroll-box.css'

const ScrollBox = ({children, height}) => {
    return <div className='scroll-box' style={{height: height}}>
        {children}
    </div>;
}
 
export default ScrollBox;