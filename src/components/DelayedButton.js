// Code DelayedButton Component Here
import React, { Component } from 'react'

class DelayedButton extends Component {
    
    delayOnClick = e => {
        e.persist()
        setTimeout( () => {
            this.props.onDelayedClick(e)
        }, this.props.delay)
    }
    
    render() {
        return (
            <button
            onClick={this.delayOnClick}
            >
                Click for Delay
            </button>
        )
    }
}

export default DelayedButton