import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



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
        <>
            <h1>{ product.title }</h1>
            <div>{ product.img }</div>
            <div>{ product.vendorcode }</div>
            <div>{ product.description }</div>
            <div>{ product.price }</div>
            
        </>
    )
}

export default ProductPage