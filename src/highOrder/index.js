import React from 'react';
// import { withSubscription } from 'sub'

function withSubscription(WrappedComponent) {
    return class extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                data: 'select'
            }
        }

        render(){
            return <WrappedComponent data={this.state.data} {...this.props}/>
        }
    }
}

function Test(){
    return <div>Test</div>
}

const testss = () => (
    <div></div>
)

class Tests extends React.Component {
    render(){
        return (
            <div>Test</div>
        )
    }
}


const CommentListWithSubscription = withSubscription(
    `${testss}`
)

class HighOrder extends React.Component {
    render (){
        return <CommentListWithSubscription/>
    }
}

export default HighOrder
