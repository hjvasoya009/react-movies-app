import React, { Component } from 'react'
import styled from 'styled-components'

class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const pageLinks = []
        for (let i = 1; i <= this.props.pages + 1; i++) {
            let active = this.props.currentPage == i ? 'active' : '';
            pageLinks.push(<li className={active} key={i} onClick={() => this.props.nextPage(this.props.type, this.props.query, i)
            }> <a href="#">{i}</a></li >)
        }

        return (
            <PaginationContainer>
                <ul>
                    {pageLinks}
                </ul>
            </PaginationContainer>
        )
    }
}

const PaginationContainer = styled.div`
    max-width: 300px;
    margin: 0 auto;
    ul {
        list-style-type:  none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        
        li {
            padding: 0.5rem;
        }
        
        li.active a {
            pointer-events: none;
            cursor: default;
            text-decoration: none;
            color: black;
        }
    }
`;

export default Pagination
