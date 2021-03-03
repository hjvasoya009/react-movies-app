import React, { Component } from 'react'
import styled from 'styled-components'
import {
    withStyles,
    Card,
    CardHeader,
    CardContent
} from '@material-ui/core'

const styles = (theme) => ({
    container: {
        margin: "2rem",
        display: "grid",
        gridTemplateColumns: "250px auto",
        gridGap: "2rem",
        alignItems: "center"
    }
})

class ResultContainer extends Component {
    render() {
        const {
            title,
            posterPath,
            releaseDate,
            popularity,
            overview,
            classes
        } = this.props

        return (
            <Card className={classes.container}>
                <Image src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={title} />
                <CardData>
                    <CardHeader
                        title={title}
                        subheader={`Release Date: ${releaseDate} | Popularity: ${popularity}`}
                    />
                    <CardContent className="overview">{overview}</CardContent>
                </CardData>
            </Card>
        );
    }
}

const CardData = styled.div`
    text-align: center;

    .overview {
        text-align: left;
    }
`;

const Image = styled.img`
    max-width: 100%;
    height: auto;
`;

export default withStyles(styles, { withTheme: true })(ResultContainer)