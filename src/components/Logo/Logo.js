import { Link } from 'react-router-dom'
import './Logo.css'

function Logo () {
    return (
        <div className='img-title-container'>
            <Link to={'/'}>
                <img className='img-title' src='https://sun9-41.userapi.com/impg/8hixnIzXew-txDm4SiCCRguWBj5Mo1Gusynrqw/2dSUimFGxK0.jpg?size=848x329&quality=95&sign=8aafefd4042523266accdb36588959fd&type=album'></img>
            </Link>
        </div>
    )
}

export default Logo