import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductPage.css'



function ProductPage () {
    const [product, setProduct] = useState ({})
    const {userId} = useParams()

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
                <img className='product-img' src={ product.img }></img>
                <div className='product-title'>{ product.title }</div>
                <div className='product-vendorcode'>{ product.vendorcode }</div>
                <div className='product-description'>{ product.description }</div>
                <div className='product-price'>{ product.price }</div>
            </div>
        </div>
    )
}

export default ProductPage