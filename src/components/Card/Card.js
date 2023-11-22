
import { Link } from 'react-router-dom';
import Button from '../Buttons/Button';
import './Card.css'


function Card ({img, title, id, vendorcode, description, price, onClick}) {

    return (
        <Link to={`products/${id}`} onClick={()=>onClick(title)} className='Card common-header'>
            <img className='Card-img' src={ img }></img>
            <div className='Card-container'>
                <h1 className='Card-title'>{ title }</h1>
                <h2>{ vendorcode }</h2>
                <p>{ description }</p>
                <div className='Card-price common-price'>{ price }</div>
                <div className='Card-button'>
                   <Button >Купить</Button>
                </div>
            </div>
        </Link>
    )
}

export default Card