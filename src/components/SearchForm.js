import React, { Component } from 'react'
import {
    withStyles,
    Button,
    TextField
} from "@material-ui/core"
import SelectOption from './SelectOption'
import { searchSelectOption } from '../config/select_type'

const styles = (theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchTextInput: {
        minWidth: "300px"
    }
})

class SearchForm extends Component {

    render() {
        const {
            classes,
            onSubmit,
            onChange,
            onSelect
        } = this.props

        return (
            <div>
                <form className={classes.root} onSubmit={onSubmit}>
                    <TextField id="outlined-basic" className={classes.searchTextInput} label="Search" variant="outlined" onChange={onChange} />
                    <SelectOption options={searchSelectOption} onSelect={onSelect} labelText="Search Type" />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        type="submit"
                    >
                        Search
                    </Button>
                </form>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(SearchForm)