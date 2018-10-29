import React,{Component} from 'react'
import { render } from "react-dom"
import LayoutField from './src'

import Form from "react-jsonschema-form"

export const TitleField = (props) => {
    console.log('titlefield', props)
    const { title, required, id } = props

    let legend = legend = `${title}${(required ? '*' : '')}`
    return <label className="control-label" for={id}>{legend}</label>
}

const fields = {
    layout: LayoutField
}

const schema = {
    type: "object",
    properties: {
        numberEnum: {
            "type": "string",
            "title": "Number enum",
            "enum": [
                "string1",
                "string2",
                "string3"
            ]
        },
        'lastName': {
            'type': 'string',
            'title': 'Last name'
        },
        'firstName': {
            'type': 'string',
            'title': 'First name'
        },
    }
}
const isTrue = (fieldName) => ({ formData }) => (formData[fieldName])
const isFilled = (fieldName) => ({ formData }) => (formData[fieldName] && formData[fieldName].length) ? true : false

const uiSchema = {
    'ui:field': 'layout',
    'ui:layout': [
        {
            foo: {
                bar: {
                    "ui:widget": "textarea"
                },
            },
        },
        {
            baz: {
                // note the "items" for an array
                items: {
                    description: {
                        "ui:widget": "string",
                        "ui:options": true
                    }
                }
            },
        },
        {
            firstName: { md: 6 },
            lastName:{md: 6,doShow: false}
        }
    ]
}

const log = (type) => console.log.bind(console,type)

class Forms extends React.Component {
    render () {
        return (
            <div>
                <Form schema={schema}
                      uiSchema={uiSchema}
                      showErrorList={false}
                      fields={fields}
                      noHtml5Validate
                      liveValidate
                />
            </div>
        )
    }
}

export default Forms
