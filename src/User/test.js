import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import jsonData from "./people.json";

class Test extends React.Component {
    render (){
        return (
            <div>
                {jsonData.people}
            </div>
        )
    }
}

export default Test
