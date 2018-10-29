import React from 'react'
import ReactDOM from 'react-dom'

class HelloWorld extends React.Component {

    constructor(props){
        super(props)
        this.add = this.add.bind(this)
        this.getDerivedStateFromProp = this.getDerivedStateFromProps.bind(this)
    }

    add(a, b){
        return a + b;
    }

    getDerivedStateFromProps(props, state){
        const sum = this.add(2, 2);
        return {
            sum
        }
    }

    render() {
        return <div>Hello World</div>
    }
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
)

export default HelloWorld
