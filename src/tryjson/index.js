import React,{Component} from 'react'
import LayoutField from './src'

import Form from 'react-jsonschema-form'

const formData = {
    title: "A new task"
}

const schema = {
    title: 'Tell me',
    type: 'object',
    required: ['title'],
    properties: {
        title: {
            type: "string",
            title: "Title"
        },
        firstName: {
          type: 'string',
          title: 'First name'
        },
        lastName: {
            type: 'string',
            title: 'Last name'
        },
        groups: {
            title: "Group",
            enum: [1,2,3],
            enumNames: ["one","two","three"]
        },
        users: {
            type: "array",
            items: {
                type: "number",
                enum: [1,2,3],
                enumNames: ["one","two","three"]
            }
        }
    }
}
const isFilled = (fieldName) => ({ formData }) => (formData[fieldName] && formData[fieldName].length) ? true : false
const isTrue = (fieldName) => ({ formData }) => (formData[fieldName])
const uiSchema={
    "ui:field": 'layout',
    'ui:layout': [
        {
            firstName: {md: 6},
            lastName: {md: 5,doShow: isFilled('firstName')}
        },
        {
            groups: {
                "ui:options": {
                    orderable: false
                },
            }
        },
        {
            users: {
                "ui:options": {
                    orderable: false
                },
                doShow: isFilled('groups')
            }
        }
    ]
}


const  fields={
    layout: LayoutField
}
const widgets={

}
class GeoPosition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...props.formData};
    }

    onChange(name) {
        return (event) => {
            this.setState({
                [name]: parseFloat(event.target.value)
            }, () => this.props.onChange(this.state));
        };
    }

    render() {
        const {lat, lon} = this.state;
        return (
            <div>
                <input type="number" value={lat} onChange={this.onChange("lat")} />
                <input type="number" value={lon} onChange={this.onChange("lon")} />
            </div>
        );
    }
}

class MyForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            state: true
        }
    }

    componentDidMount (){
        const user = {
            email: "test@user.com",
            password:"password123."
        }
        console.log(user)
        const users = {
            user: user
        }
        console.log(typeof users)
        const user_json = JSON.parse(JSON.stringify(users))
        console.log(typeof user_json)
        // const user_string = "{\"user\":" + user_json + "}"
        // console.log(user_string)
        // console.log(typeof user_string)

    }

    changeCss(){
        const states = this.state.state
        this.setState({state: !states})
    }

    renderState(){
        const layoutHeader = {
            height: 320,
            minHeight: 320,
            background: "url('/assets/images/backgrounds/dark-material-bg.jpg') no-repeat",
            backgroundSize: 'cover',
            color: '#fff',
    }
        const showStyle = {
            height: '200px',
            width: '200px',
            borderRadius: '10px',
            // background: 'blue'
        }

        const bineStyle = Object.assign(layoutHeader,showStyle)

        return (
            <div>Test

            </div>
        )
    }
    renderMath(){
        const maths = [{field: 32},{field: 35}]
        const temp = 34
        let lists = maths.map(function (o) {
            if (o.field <= temp){
                return (<b>{o.field}</b>)
            }
            else {
                return o.field
            }
        })
        return (
            <div>
                {lists}
            </div>
        )

    }
    render() {

        return (
            <div>
                <div>MyForm</div>
                {this.renderMath()}
            </div>
        )
    }
}

export default MyForm
