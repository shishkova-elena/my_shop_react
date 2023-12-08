import './Header.css'
import { Button } from '@mui/material'
import { clearBasket } from '../../store/basket/basketSlice'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../Logo/Logo'


function Header () {
    const dispatch = useDispatch()
    const basket = useSelector((state) => state.basket)
    return (
            <header className='Header'>
                <Link to={'basket'} className='Basket'>
                    <Button>Корзина</Button>
                </Link>
                <div className='quantity'>{ Object.values(basket).reduce((acc, item) => {
                    acc += item

                    return acc
                }, 0) }
                </div>
                <div className='clearBasket'>
                    <Button onClick={() => dispatch(clearBasket())}>Очистить корзину</Button>
                </div>
            </header>
    )
}

export default Header