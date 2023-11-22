import './Input.css'
import React from 'react'


export default class Input extends React.Component {
    render () {
        return (
            <input className='CommonInput' 
                   name={this.props.name} 
                   id={this.props.id} 
                   type={this.props.type} 
                   placeholder={this.props.placeholder}></input>
        )
    }
}