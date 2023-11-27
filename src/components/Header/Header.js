import { useDispatch, useSelector } from 'react-redux'
import './Header.css'
import { Button } from '@mui/material'
import { clearBasket } from '../../store/basket/basketSlice'
import { Link } from 'react-router-dom'


function Header () {
    const dispatch = useDispatch()
    const basket = useSelector((state) => state.basket)
    return (
        <header>
            <h1>{ Object.values(basket).reduce((acc, item) => {
                acc += item

                return acc
            }, 0) }</h1>
            <Button onClick={() => dispatch(clearBasket())}>Очистить корзину</Button>
            <Link to={'basket'}>Корзина</Link>
        </header>
    )
}

export default Header