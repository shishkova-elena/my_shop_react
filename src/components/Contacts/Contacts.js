import { Button } from '@mui/material'
import './Contacts.css'


function Contacts () {
    return (
        <div className='Contacts'>
            <Button>
                <a className='tel'href="tel:+70000000000">+7 000 000 00 00</a>
            </Button>
            <Button>
                <a className="map" href="https://www.google.com/maps/place/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F+%D0%9F%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D1%8C/@55.7539333,37.6182201,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x46b54a5a738fa419:0x7c347d506b52311f!2z0JrRgNCw0YHQvdCw0Y8g0J_Qu9C-0YnQsNC00Yw!8m2!3d55.7539303!4d37.620795!16zL20vMGhtXzc!3m5!1s0x46b54a5a738fa419:0x7c347d506b52311f!8m2!3d55.7539303!4d37.620795!16zL20vMGhtXzc?hl=ru&entry=ttu" target="_blank" rel="nofollow noopener noreferrer">Москва, Красная площадь</a>
            </Button>
        </div>
    )
}

export default Contacts