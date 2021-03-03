import React, { Component } from 'react'
import {
    withStyles,
    FormControl,
    InputLabel,
    Select
} from '@material-ui/core'

const styles = (theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    selectInput: {
        minWidth: "150px"
    }
})

class SelectOption extends Component {

    render() {
        const {
            classes,
            options,
            onSelect,
            labelText
        } = this.props

        return (

            <div style={{ textAlign: "center" }}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">{labelText}</InputLabel>
                    <Select
                        native
                        className={classes.selectInput}
                        onChange={onSelect}
                        label={labelText}
                    >
                        {options.map((option) => (
                            <option key={option.option} value={option.option}>{option.option}</option>
                        ))}
                    </Select>
                </FormControl>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(SelectOption)
