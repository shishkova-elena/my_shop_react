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
                <div>
                    <Button>
                        <Link to={'basket'} className='Basket'>Корзина</Link>
                    </Button>
                </div>
                <div className='quantity'>{ Object.values(basket).reduce((acc, item) => {
                    acc += item

                    return acc
                }, 0) }
                </div>
                <div className='clearBasket-container'>
                    <Button onClick={() => dispatch(clearBasket())}>
                        <div className='clearBasket'>Очистить корзину</div>
                    </Button>
                </div>
            </header>
    )
}

export default Header