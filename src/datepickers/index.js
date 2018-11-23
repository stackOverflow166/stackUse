import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'

class DatePickers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            startDate: moment(new Date()),
            deadLineError: false,
            endingDate: moment(new Date()),
            qs: {catName:'',subCatName:''}
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(date){
        if (this.state.startDate){
            if (this.state.startDate < date){
                console.log('deadline date should be greater than starting date.')
                this.setState({
                    deadLineError:(!this.state.deadLineError),
                    endingDate: date
                },() => console.log(this.state))
            } else {
                console.log('date ok!');
                this.setState({
                    deadLineError:(!this.state.deadLineError),
                    endingDate: date,
                },() => console.log(this.state))
            }
        }
        this.setState(prevState => ({
            qs: {
                ...prevState.qs,
                catName:'name'
            }
        }))
    }
    render(){
        return (
            <div>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
            </div>
            )
    }
}

export default DatePickers
