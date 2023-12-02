import { BUTTON_THEMES } from '../../utils/Constants'
import './Button.scss'
import classNames from 'classnames'

function Button ({disabled = false, children, theme=BUTTON_THEMES.dark, onClick=()=>{}}) {
    const onInnerClick = (event) => {
        console.log('Button clicked', event)
        onClick(event)
    }

    return (
        <button onClick={onInnerClick} 
                className={classNames('CommonButton', 
                                      `CommonButton--${theme}`, 
                                      {
                                        'CommonButton--disabled': disabled
                                      }
                                     )
                          }
        >
        { children }
        </button>

    )
}

export default Button