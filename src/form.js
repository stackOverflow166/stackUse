import React,{Component} from 'react'
import { render } from "react-dom"

import Form from "react-jsonschema-form"



const schema = {
    type: "object",
    properties: {
        foo: {
            type: "object",
            properties: {
                bar: {type: "string"}
            }
        },
        baz: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    description: {
                        "type": "string"
                    }
                }
            }
        },
        numberEnum: {
            "type": "string",
            "title": "Number enum",
            "enum": [
                "string1",
                "string2",
                "string3"
            ]
        }
    }
}

const uiSchema = {
    foo: {
        bar: {
            "ui:widget": "textarea"
        },
    },
    baz: {
        // note the "items" for an array
        items: {
            description: {
                "ui:widget": "string",
                "ui:options": false
            }
        }
    }
}

const log = (type) => console.log.bind(console,type)

const onChange = {

}
// render((
//     <Form schema={schema}
//           onChange={log("changed")}
//           onSubmit={log("submitted")}
//           onError={log("errors")}
//     />
// ),document.getElementById("app"))

class Forms extends React.Component {
    render () {
        return (
            <div>
                <Form schema={schema}
                      uiSchema={uiSchema}
                      onChange={log("changed")}
                      onSubmit={log("submitted")}
                      onError={log("errors")}
                />
            </div>
        )
    }
}

export default Forms
