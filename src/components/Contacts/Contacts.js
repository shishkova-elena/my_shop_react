import { Button } from '@mui/material'
import './Contacts.css'


function Contacts () {
    return (
        <div className='Contacts'>
            <Button>
                <a className='tel'href="tel:+79160719579">+7 916 071 95 79</a>
            </Button>
            <Button>
                <a className="map" href="https://www.google.com/maps/@55.0851791,38.7748175,16z?hl=ru&entry=ttu" target="_blank" rel="nofollow noopener noreferrer">Московская обл., г. Коломна, ул. Ленина, д. 73</a>
            </Button>
        </div>
    )
}

export default Contacts