import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Card from "@material-ui/core/Card";

class RegisterShop extends Component {

    constructor(props){
        super(props)
        this.state ={
            first: 'first',
            second: 'second',
            third: 'third',
            graphdata: [
                [{y: 1, x: 10.7279501},{y: 2, x: 10.73239994}],
                [{y: 3, x: 10.73684978}, {y: 4, x: 10.7413168}],
                [{y: 5, x: 10.74576664},{y: 6, x: 10.7502327}]
            ]
        }
    }
    renderGraphData(){
        const graphArray = []
        this.state.graphdata.map(items => (
            items.map(item => (
                graphArray.push(item)
            ))
        ))
        console.log(graphArray)
    }

    renderField(field) {
        return (
            <div>
                <label>{field.label}</label>
                <input className="form-control" type={field.type} {...field.input} />
            </div>
        );
    }
    onSubmit(values) {
        let formData = new FormData();
        ////
    }
    setStyle (){
        let styles = {}
        if (this.state.first === 'first'){
            const firstStyle = {
                width: '200px',
                height: '200px'
            }
            styles = Object.assign(styles,firstStyle)
            this.setState()
        }
        if (this.state.second === 'second'){
            const firstStyle = {
                background:'#679923'
            }
            styles = Object.assign(styles,firstStyle)
        }
        if (this.state.third === 'third'){
            const anotherStyle = {
                color: '#783457'
            }
            styles = Object.assign(styles,anotherStyle)
        }
        return styles
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <div onClick={this.renderGraphData}>
                <div style={this.setStyle()}>Test</div>
            </div>
        );
    }
}

export default RegisterShop
