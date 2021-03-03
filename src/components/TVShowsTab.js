import React, { Component } from 'react'
import { tvSelectOption } from '../config/select_type'
import api from '../services/api'
import ResultContainer from './ResultContainer'
import SelectOption from './SelectOption'

class TvShowsTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: 'airing_today',
            tvShows: []
        }
        this.handleSelect = this.handleSelect.bind(this)
    }

    async componentDidMount() {
        this.getData(this.state.category)
    }

    async getData(category) {
        const result = await api.get(`/tv/${category}?language=en-US`)
        this.setState({ tvShows: result.data.results })
    }

    async handleSelect(e) {
        this.getData(e.target.value)
    }

    render() {
        return (
            <div>
                <SelectOption
                    options={tvSelectOption}
                    onSelect={this.handleSelect}
                    labelText="Category"
                />

                {
                    this.state.tvShows.map((tvShow) => (
                        <div key={tvShow.id}>
                            < ResultContainer
                                posterPath={tvShow.poster_path}
                                title={tvShow.name}
                                releaseDate={tvShow.first_air_date}
                                popularity={tvShow.popularity}
                                overview={tvShow.overview}
                            />
                            {console.log(tvShow)}
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default TvShowsTab