import React, { Component } from 'react'

export default class DataContainer extends Component {
    state = {
        moviesName: '',
        movies: [],
        isLoading: false
    }
    render() {
        return (
            <div>
                <h1>Data Container</h1>
            </div>
        )
    }
}
