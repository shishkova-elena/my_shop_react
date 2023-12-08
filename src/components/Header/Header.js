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
                        <Link to={'basket'}>
                            <Button>
                                <div className='Basket'>Корзина</div>
                            </Button>
                        </Link>
                <div className='quantity'>{ Object.values(basket).reduce((acc, item) => {
                    acc += item

                    return acc
                }, 0) }
                </div>
                    <Link>
                        <Button onClick={() => dispatch(clearBasket())}>
                            <div className='clearBasket'>Очистить корзину</div>
                        </Button>
                    </Link>
            </header>
    )
}

export default Header