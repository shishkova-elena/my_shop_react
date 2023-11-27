import './Index.css'
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '../../components/Buttons/Button';
import { BUTTON_THEMES } from '../../utils/Constants';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/products/productsSlice';


function IndexPage () {

    //const [products, setProducts] = useState([0])
   const [isSubscribeButtonDisabled, setIsSubscribeButtonDisabled] = useState(false)

    const [products, isLoading] = useSelector((state) => [state.products.entities, state.products.loading])
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(getProducts())

    }, [])
  
    const onSubscribe = () => {
      setIsSubscribeButtonDisabled(true)
      setTimeout(() => {
        setIsSubscribeButtonDisabled(false)
        console.log('subscribe')
      }, 2000)
    }
    return (
        <>
                <div className='App-search'>
                    <TextField id="outlined-basic" label="E-mail" variant="outlined" />
                    <Button theme={BUTTON_THEMES.light} disabled={isSubscribeButtonDisabled} onClick={onSubscribe}>Подписаться</Button>
                    <Link to={'contacts'}>Контакты</Link>
                </div>
                <div className='App-container'>
                    {
                    !isLoading && products.map ((item, index)=> {
                        return <Card key={index}
                                    title={item.title}
                                    id={item.id}
                                    vendorcode={item.vendorcode}
                                    onClick={(event)=>console.log('clicked', event)}
                                    description={item.description}
                                    price={item.price}
                                    img={item.img} />
                    })
                    }

                    {
                      isLoading && <h2>Загрузка...</h2>
                    }
                </div>
        </>
    )
}

export default IndexPage