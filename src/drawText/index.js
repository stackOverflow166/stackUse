import React, { Component } from 'react';

// import './styles.scss';

import Drawer from '@material-ui/core/Drawer';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter_open: true,
            form: {
                city: ''
            },
            cities: [
                {
                    id: 1,
                    label: 'Lorem'
                },
                {
                    id: 2,
                    label: 'Ipsum'
                }
            ]
        }
    }

    handleCityChange = (changeEvent) => {
        this.setState({
            form: {
                city: changeEvent.target.value
            }
        });
    }

    render() {
        return (
            <Drawer
                anchor="bottom"
                open={this.state.filter_open}
                transitionDuration={450}
            >
                <div className="Filter">
                    <TextField
                        id="filled-select-city"
                        className="TextField"
                        select
                        label="Select an option"
                        value={this.state.form.city}
                        onChange={this.handleCityChange}
                        margin="normal"
                    >
                        {this.state.cities.map(option => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </Drawer>
        )
    }
}

export default Filter
