import React, { Component } from 'react'
import Pagination from './Pagination';
import ResultContainer from './ResultContainer'

class SearchTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchResults: [],
            searchResultText: ''
        }
    }

    componentDidMount() {
        this.setState({
            searchResults: this.props.searchResult,
            searchResultText: this.props.searchResultText,
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.searchResult !== prevProps.searchResult) {
            this.setState({ searchResults: this.props.searchResult })
        }

        if (this.props.searchResultText !== prevProps.searchResultText) {
            this.setState({ searchResultText: this.props.searchResultText })
        }
    }

    render() {
        const numberPages = Math.floor(this.props.totalResults / 20);
        // console.log(numberPages);
        return (
            <div>
                {
                    this.state.searchResults.length > 0 ?
                        (
                            this.state.searchResults.map((result) => (
                                <div key={result.id}>
                                    < ResultContainer
                                        posterPath={result.poster_path}
                                        title={result.title !== undefined ? result.title : result.name}
                                        releaseDate={result.release_date !== undefined ? result.release_date : result.first_air_date}
                                        popularity={result.popularity}
                                        overview={result.overview}
                                    />
                                    {/* {console.log(result)} */}
                                </div>
                            ))
                        )
                        : (
                            <h2 style={{ textAlign: "center" }}>{this.state.searchResultText}</h2>
                        )
                }
                {(this.props.totalResults > 20 ? <Pagination pages={numberPages} nextPage={this.props.nextPage} currentPage={this.props.currentPage} query={this.props.query} type={this.props.type} /> : '')}
            </div>
        )
    }
}

export default SearchTab