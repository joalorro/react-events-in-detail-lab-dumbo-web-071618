import React, { Component } from 'react'

class CoordinatesButton extends Component {

    createCoordsArray = e => {
        const arr = []
        arr.push(e.clientX, e.clientY)
        this.props.onReceiveCoordinates(arr)
    }

    render(){
        return (
            <button
            onClick={this.createCoordsArray}
            >
                CLICK JER BOI
            </button>
        )
    }
}

export default CoordinatesButton