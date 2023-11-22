import './Index.css'
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '../../components/Buttons/Button';
import { BUTTON_THEMES } from '../../utils/Constants';
import { Link } from 'react-router-dom';


function IndexPage () {

    const [products, setProducts] = useState([0])
    const [isSubscribeButtonDisabled, setIsSubscribeButtonDisabled] = useState(false)
  
    useEffect(() => {
      fetch ("my_shop_react/products/data.json")
            .then((response) => response.json())
            .then((result) => {
              setProducts(result)
            })
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
                    products.map ((item, index)=> {
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
                </div>
        </>
    )
}

export default IndexPage