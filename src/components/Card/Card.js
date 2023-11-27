
import { Link } from 'react-router-dom';
import Button from '../Buttons/Button';
import './Card.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../store/basket/basketSlice';



function Card ({img, title, id, vendorcode, description, price}) {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.basket)
    

    const onBuyClick = (event) => {
        event.preventDefault()
        event.stopPropagation()

        dispatch(addToBasket(id))
    }

    const onDeleteClick = (event) => {
        event.preventDefault()
        event.stopPropagation()

        dispatch(removeFromBasket(id))
    }

    return (
        <>
            <Link to={`products/${id}`} className='Card common-header'>
                <img className='Card-img' src={ img }></img>
                
                <div className='Card-container'>
                    <h1 className='Card-title'>{ title }</h1>
                    <h2>{ vendorcode }</h2>
                    <p>{ description }</p>
                    <div className='Card-price common-price'>{ price }</div>
                    <div className='Card-button'>
                        { !products[id] && <Button onClick={onBuyClick}>Купить</Button> }
                        { products[id] && (
                            <>
                                <Button onClick={onDeleteClick}>-</Button> 
                                {products[id]}
                                <Button onClick={onBuyClick}>+</Button> 
                            </>
                        )}
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Card