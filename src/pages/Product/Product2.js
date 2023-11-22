
import { useEffect, useState } from 'react'
import './Product.css'
import { useParams } from 'react-router-dom'



function ProductPage () {
    const {userId} = useParams()
    const [product, setProduct] = useState ({})

    useEffect (() => {
        (async () => {
            console.log('start')
            const response = await fetch (`my_shop_react/data.json/${userId}`)
            console.log('middle')
            const result = await response.json()
            
            setProduct (result)
            console.log('end')
        }) ()
    }, [])
    return (
        <>
            <h1>{ product.title }</h1>
            <img src={product.img}></img>
        </>
    )
}

export default ProductPage