import './Input.css'
import React from 'react'


export default class Input extends React.Component {
    render () {
        return (
            <div className='CommonInput'>
                <input
                   name={this.props.name} 
                   id={this.props.id} 
                   type={this.props.type} 
                   placeholder={this.props.placeholder}>
                </input>
            </div>
        )
    }
}