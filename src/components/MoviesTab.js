import React, { Component } from 'react'
import { movieSelectOption } from '../config/select_type'
import api from '../services/api'
import ResultContainer from './ResultContainer'
import SelectOption from './SelectOption'

class MoviesTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: 'now_playing',
            movies: []
        }
        this.handleSelect = this.handleSelect.bind(this)
    }

    async componentDidMount() {
        this.getData(this.state.category)
    }

    async getData(category) {
        const result = await api.get(`/movie/${category}?language=en-US`)
        this.setState({ movies: result.data.results })
    }

    async handleSelect(e) {
        this.getData(e.target.value)
    }

    render() {
        return (
            <div>
                <SelectOption
                    options={movieSelectOption}
                    onSelect={this.handleSelect}
                    labelText="Category"
                />

                {
                    this.state.movies.map((movie) => (
                        <div key={movie.id}>
                            < ResultContainer
                                posterPath={movie.poster_path}
                                title={movie.title}
                                releaseDate={movie.release_date}
                                popularity={movie.popularity}
                                overview={movie.overview}
                            />
                            {/* {console.log(movie)} */}
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default MoviesTab