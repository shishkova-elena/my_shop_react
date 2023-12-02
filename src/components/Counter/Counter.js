import { useState } from 'react'
import './Counter.css'
import Button from '../Button/Button'


function Counter () {

    const [counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div className='Counter'>
            <Button onClick={decrement}>-</Button>
            {counter}
            <Button onClick={increment}>+</Button>
            <Button onClick={increment}>+</Button>
        </div>
    )
}

export default Counter