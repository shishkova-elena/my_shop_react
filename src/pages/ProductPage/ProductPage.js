import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductPage.css'
import Button from '../../components/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket } from '../../store/basket/basketSlice'




function ProductPage (id) {
    const [product, setProduct] = useState ({})
    const {userId} = useParams()
    const products = useSelector((state) => state.basket)

    const dispatch = useDispatch()

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

    useEffect (() => {
        const getData = async (url) => {
            const response = await fetch (url)
            const result = await response.json ()

            setProduct (result) 
        }

        getData(`/my_shop_react/products/${userId}.json`)
            .then (data => console.log(data))
            .catch (error => console.log(error.message))

    }, [userId])
    return (
        <div className='product'>
            <div className='product-container'>
                <div className='img'>
                    <img className='product-img' src={ product.img }></img>
                </div>
                <div className='product-text'>
                    <div className='product-text__container'>
                        <div className='product-title'>{ product.title }</div>
                        <div className='product-vendorcode'>{ product.vendorcode }</div>
                        <div className='product-description'>{ product.description }</div>
                        <div className='product-price'>{ product.price }</div>
                        <div className='Card-button'>
                            { !products[id] && <Button onClick={onBuyClick}>Купить</Button> }
                            { products[id] && (
                                <div>
                                    <Button onClick={onDeleteClick}>-</Button> 
                                    {products[id]}
                                    <Button onClick={onBuyClick}>+</Button> 
                                </div>
                            )}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage