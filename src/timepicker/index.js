import React from 'react'
import TimePicker from './TimePicker'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// import styles from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple';
import Button from '@material-ui/core/Button';

class TimePickers extends React.Component{
    constructor(props){

        const styles = {
            color: 'red'
        }
        super(props)
        this.state = {
            open: true
        }
        console.log(TimePicker)
    }

    render(){
        const theme = createMuiTheme({
            palette: {
                primary: {
                    main: '#efbb40'
                }
            },
            typography: {
                useNextVariants: true,
                suppressDeprecationWarnings: true
            }
        })

        const themes = createMuiTheme({
            palette: {
                primary: { main: purple[500] }, // Purple and green play nicely together.
                secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
            },
        });
        const styles = {
            width: '200'
        }
        return (
            <div>
                <Button
                    onClick={() => this.setState({ open: true })}
                >
                    Open time picker
                </Button>
                <Dialog
                    // maxWidth='xs'
                    style = {styles}
                    open={this.state.open}
                >
                    <TimePicker/>
                    <DialogActions>
                        <Button onClick={() => this.setState({ open: false })} color='primary'>
                            Cancel
                        </Button>
                        <Button onClick={() => this.setState({ open: false })} color='primary'>
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default TimePickers
