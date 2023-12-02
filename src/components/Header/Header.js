import './Header.css'
import { Button } from '@mui/material'
import { clearBasket } from '../../store/basket/basketSlice'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


function Header () {
    const dispatch = useDispatch()
    const basket = useSelector((state) => state.basket)
    return (
            <header className='Header'>
                <Link to={'/'}>
                    <img className='img-title' src='https://sun9-41.userapi.com/impg/8hixnIzXew-txDm4SiCCRguWBj5Mo1Gusynrqw/2dSUimFGxK0.jpg?size=848x329&quality=95&sign=8aafefd4042523266accdb36588959fd&type=album'></img>
                </Link>
                <Link to={'basket'} className='Basket'>
                    <Button>Корзина</Button>
                </Link>
                <div className='quantity'>{ Object.values(basket).reduce((acc, item) => {
                    acc += item

                    return acc
                }, 0) }
                </div>
                <div className='clear'>
                    <Button onClick={() => dispatch(clearBasket())}>Очистить корзину</Button>
                </div>
                <div className='Contacts'>
                    <Button>
                        <a className='tel'href="tel:+79160719579">+7 916 071 95 79</a>
                    </Button>
                    <Button>
                        <a className="map" href="https://www.google.com/maps/@55.0851791,38.7748175,16z?hl=ru&entry=ttu" target="_blank" rel="nofollow noopener noreferrer">Московская обл., г. Коломна, ул. Ленина, д. 73</a>
                    </Button>
                </div>
            </header>
    )
}

export default Header