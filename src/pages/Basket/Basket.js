import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import './Basket.css'

function BasketPage () {
    const products = useSelector(state=> state.products.entities)
    const basket = useSelector (state => state.basket)

    return (
        <>
            <span className="sum-title">Общая сумма </span>
            <span className="sum-number">
                {products.reduce((acc, el) => {

                    if (basket[el.id]) {
                        acc = acc + el.price * basket[el.id]
                    }

                    return acc
                }, 0)}
            </span>
            <div className="Basket">
                {
                    products
                        .filter((product) => !! basket[product.id])
                        .map((item, index) => {
                            return <Card key={index}
                            title={item.title}
                            id={item.id}
                            vendorcode={item.vendorcode}
                            onClick={(event)=>console.log('clicked', event)}
                            description={item.description}
                            price={item.price}
                            img={item.img} >
                            Корзина
                            </Card>
                        })
                }
            </div>
        </>
    )
}

export default BasketPage