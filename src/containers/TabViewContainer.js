import React, { Component } from 'react'
import styled from 'styled-components'

import api from '../services/api'
import MoviesTab from '../components/MoviesTab'
import SearchTab from '../components/SearchTab'
import TvShowsTab from '../components/TVShowsTab'
import SearchForm from '../components/SearchForm'

// Material UI Import
import {
    Paper,
    Tab,
    Tabs,
} from '@material-ui/core'


class TabViewContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'multi',
            searchResults: [],
            searchResultText: 'Please enter a search',
            tab: 'movies',
            tabID: 0,
            query: '',
            currentPage: 1
        }

        this.getData = this.getData.bind(this)
        this.changeTab = this.changeTab.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.nextPage = this.nextPage.bind(this)
    }

    async getData(type, query) {
        const result = await api.get(`/search/${type}?language=en-US&query=${query}`)
        if (result.data.total_results > 0) {
            this.setState(() => ({
                searchResults: result.data.results,
                searchResultText: '',
                totalResults: result.data.total_results
            }))
        } else {
            this.setState(() => ({
                searchResults: [],
                searchResultText: 'Sorry, there were no results',
                totalResults: 0
            }))
        }
    }

    async nextPage(type, query, pageNumber) {
        const result = await api.get(`/search/${type}?language=en-US&query=${query}&page=${pageNumber}`)
        if (result.data.total_results > 0) {
            this.setState(() => ({
                searchResults: result.data.results,
                searchResultText: '',
                currentPage: pageNumber
            }))
        } else {
            this.setState(() => ({
                searchResults: [],
                searchResultText: 'Sorry, there were no results'
            }))
        }
    }

    changeTab(e, newValue) {
        this.setState({ tabID: newValue });

        switch (newValue) {
            case 1:
                this.setState({ tab: 'search' })
                break
            case 2:
                this.setState({ tab: 'tvShows' })
                break
            default:
                this.setState({ tab: 'movies' })
                break
        }
    }

    handleChange(e) {
        this.setState({
            query: e.target.value
        })
        this.changeTab(e, 1)
    }

    handleSelect(e) {
        this.setState({
            type: e.target.value
        })
    }

    async handleSubmit(e) {
        e.preventDefault()
        this.changeTab(e, 1)

        if (this.state.query !== '') {
            this.getData(this.state.type, this.state.query)
        } else {
            this.setState(() => ({
                searchResultText: 'Please enter a search'
            }))
        }
    }

    render() {
        return (
            <div className="container">

                {/* Search Section Component */}
                <SearchForm
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                />

                <TabView>
                    <Paper>
                        <Tabs
                            value={this.state.tabID}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            onChange={this.changeTab}
                        >
                            <Tab label="Movies" />
                            <Tab label="Search" />
                            <Tab label="TV Shows" />
                        </Tabs>
                    </Paper>


                    {/* Managing Tab Content on Change */}
                    <TabContent>
                        {
                            this.state.tab === 'movies'
                                ? <MoviesTab />
                                : ''
                        }
                        {
                            this.state.tab === 'search'
                                ?
                                <SearchTab
                                    searchResult={this.state.searchResults}
                                    searchResultText={this.state.searchResultText}
                                    nextPage={this.nextPage}
                                    totalResults={this.state.totalResults}
                                    currentPage={this.state.currentPage}
                                    query={this.state.query}
                                    type={this.state.type}
                                />
                                : ''
                        }
                        {
                            this.state.tab === 'tvShows'
                                ? <TvShowsTab />
                                : ''
                        }
                    </TabContent>

                </TabView>
            </div>
        );
    }
}

const TabView = styled.div`
    border: 1px solid #000;
    margin-top: 5rem;
`;

const TabContent = styled.div`
    margin: 2rem 3rem;
`;

export default TabViewContainer;